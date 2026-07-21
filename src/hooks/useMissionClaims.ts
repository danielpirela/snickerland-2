import { useAuth } from '#/contexts/AuthContext'
import {
  createMissionClaim,
  getMissionClaimKey,
  getMissionClaims,
  getMissionClaimsErrorMessage,
  markMissionClaimPaid,
  sortMissionClaims,
} from '#/lib/missionClaims'
import {
  isSupabaseConfigured,
  supabase,
  type MissionClaimRow,
} from '#/lib/supabase'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export function useMissionClaims({ allUsers = false }: { allUsers?: boolean } = {}) {
  const { username } = useAuth()
  const [claims, setClaims] = useState<MissionClaimRow[]>([])
  const [isLoading, setIsLoading] = useState(Boolean(isSupabaseConfigured && (allUsers || username)))
  const [error, setError] = useState<string | null>(null)
  const [pendingAction, setPendingAction] = useState<string | null>(null)
  const requestIdRef = useRef(0)
  const claimsIdentityRef = useRef<string | null>(null)

  const refresh = useCallback(async (): Promise<void> => {
    const requestId = ++requestIdRef.current
    const queryUsername = allUsers ? undefined : username
    const claimsIdentity = allUsers ? 'all-users' : queryUsername ?? null
    if (claimsIdentityRef.current !== claimsIdentity) {
      claimsIdentityRef.current = claimsIdentity
      setClaims([])
    }

    if ((!allUsers && !queryUsername) || !isSupabaseConfigured || !supabase) {
      setError(null)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    try {
      const nextClaims = await getMissionClaims(queryUsername ?? undefined)
      if (requestId !== requestIdRef.current) return
      setClaims(nextClaims)
      setError(null)
    } catch (claimError) {
      if (requestId !== requestIdRef.current) return
      setError(getMissionClaimsErrorMessage(claimError))
    } finally {
      if (requestId === requestIdRef.current) setIsLoading(false)
    }
  }, [allUsers, username])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const claimsByDay = useMemo(
    () => new Map(claims.map((claim) => [getMissionClaimKey(claim.role_id, claim.day), claim])),
    [claims],
  )

  const getClaim = useCallback(
    (roleId: string, day: number): MissionClaimRow | null =>
      claimsByDay.get(getMissionClaimKey(roleId, day)) ?? null,
    [claimsByDay],
  )

  const claimDay = useCallback(
    async (roleId: string, day: number): Promise<MissionClaimRow | null> => {
      const actionKey = `claim:${getMissionClaimKey(roleId, day)}`
      setPendingAction(actionKey)
      setError(null)

      try {
        if (!username) {
          throw new Error('Iniciá sesión con tu username de Minecraft para reclamar recompensas.')
        }
        if (!isSupabaseConfigured || !supabase) {
          throw new Error(
            'Los reclamos requieren Supabase configurado. No se guardó ningún reclamo.',
          )
        }

        const claim = await createMissionClaim(username, roleId, day)
        setClaims((currentClaims) =>
          sortMissionClaims([
            ...currentClaims.filter(
              (currentClaim) =>
                getMissionClaimKey(currentClaim.role_id, currentClaim.day) !==
                getMissionClaimKey(roleId, day),
            ),
            claim,
          ]),
        )
        return claim
      } catch (claimError) {
        setError(getMissionClaimsErrorMessage(claimError))
        return null
      } finally {
        setPendingAction((currentAction) =>
          currentAction === actionKey ? null : currentAction,
        )
      }
    },
    [username],
  )

  const markPaid = useCallback(
    async (id: string): Promise<MissionClaimRow | null> => {
      const actionKey = `paid:${id}`
      setPendingAction(actionKey)
      setError(null)

      try {
        if (!username) {
          throw new Error('Iniciá sesión con tu username de Minecraft para marcar reclamos.')
        }
        if (!isSupabaseConfigured || !supabase) {
          throw new Error(
            'Los reclamos requieren Supabase configurado. No se actualizó ningún reclamo.',
          )
        }

        const claim = await markMissionClaimPaid(id, username)
        setClaims((currentClaims) =>
          sortMissionClaims(
            currentClaims.map((currentClaim) =>
              currentClaim.id === claim.id ? claim : currentClaim,
            ),
          ),
        )
        return claim
      } catch (claimError) {
        setError(getMissionClaimsErrorMessage(claimError))
        return null
      } finally {
        setPendingAction((currentAction) =>
          currentAction === actionKey ? null : currentAction,
        )
      }
    },
    [username],
  )

  return {
    claims,
    error,
    getClaim,
    isLoading,
    markPaid,
    pendingAction,
    refresh,
    claimDay,
  }
}
