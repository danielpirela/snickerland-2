import { ShieldAlert } from 'lucide-react'

export default function MissionClaimsNotice({ message }: { message: string }) {
  return (
    <div
      className="mb-6 flex items-start gap-3 border-3 p-4"
      style={{ borderColor: 'rgba(170,51,51,0.55)', background: 'rgba(170,51,51,0.14)' }}
      role="alert"
    >
      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--redstone-light)' }} />
      <p className="m-0 text-base leading-6" style={{ color: 'var(--text)' }}>
        {message}
      </p>
    </div>
  )
}
