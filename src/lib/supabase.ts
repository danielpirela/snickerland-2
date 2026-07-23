import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export type MissionProgressRow = {
  username: string
  role_id: string
  day: number
  task_index: number
  completed_at: string
}

export type MissionProgressTask = Omit<MissionProgressRow, 'completed_at'>

export type MissionProgressInsert = Omit<MissionProgressRow, 'completed_at'> & {
  completed_at?: string
}

export type MissionProgressUpdate = Partial<MissionProgressRow>

export type MissionClaimStatus = 'pending' | 'processing' | 'paid' | 'rejected'

export type MissionClaimRow = {
  id: string
  username: string
  role_id: string
  day: number
  reward_amount: number
  reward_title: string
  status: MissionClaimStatus
  created_at: string
  paid_at: string | null
  paid_by: string | null
  processing_server: string | null
  processing_at: string | null
  last_error: string | null
}

/** The insert shape intentionally omits status so the database default stays authoritative. */
export type MissionClaimInsert = {
  username: string
  role_id: string
  day: number
  reward_amount: number
  reward_title: string
}

export type MissionClaimUpdate = Partial<MissionClaimRow>

export type Database = {
  public: {
    Tables: {
      mission_progress: {
        Row: MissionProgressRow
        Insert: MissionProgressInsert
        Update: MissionProgressUpdate
        Relationships: []
      }
      mission_claims: {
        Row: MissionClaimRow
        Insert: MissionClaimInsert
        Update: MissionClaimUpdate
        Relationships: []
      }
      roles: {
        Row: { id: string; name: string; emoji: string; color: string }
        Insert: { id: string; name: string; emoji?: string; color?: string }
        Update: Partial<{ name: string; emoji: string; color: string }>
        Relationships: []
      }
      days: {
        Row: { id: string; role_id: string; day: number; title: string }
        Insert: { role_id: string; day: number; title: string; id?: string }
        Update: Partial<{ title: string; day: number }>
        Relationships: []
      }
      tasks: {
        Row: { id: string; day_id: string; task_index: number; title: string; amount: number }
        Insert: { day_id: string; task_index: number; title: string; amount?: number; id?: string }
        Update: Partial<{ title: string; amount: number }>
        Relationships: []
      }
      rewards: {
        Row: { id: string; role_id: string; day_id: string; amount: number; title: string }
        Insert: { role_id: string; day_id: string; amount: number; title: string; id?: string }
        Update: Partial<{ amount: number; title: string }>
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() ?? ''
const supabaseKey = (
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY
)?.trim() ?? ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)

export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null

export const MISSION_PROGRESS_PAGE_SIZE = 1000
export const MISSION_PROGRESS_UPDATED_EVENT = 'snickerland:mission-progress-updated'

// ---------- Quest Definition Types (Phase 2: Server-Side Quest Loading) ----------

/** A single task row from the tasks table. */
export interface QuestTask {
  id: string
  day_id: string
  task_index: number
  title: string
  amount: number
}

/** A single reward row from the rewards table. */
export interface QuestReward {
  id: string
  role_id: string
  day_id: string
  amount: number
  title: string
}

/** A day row with nested tasks and rewards (from Supabase JOIN). */
export interface QuestDay {
  id: string
  role_id: string
  day: number
  title: string
  tasks: QuestTask[]
  rewards: QuestReward[]
}

/** A role row with nested days (from Supabase JOIN). */
export interface QuestRole {
  id: string
  name: string
  emoji: string
  color: string
  days: QuestDay[]
}

/** The full quest tree returned by the server function. */
export type QuestTree = QuestRole[]
