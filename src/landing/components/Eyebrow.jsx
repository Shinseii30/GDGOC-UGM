export default function Eyebrow({ children, dot = 'bg-brand' }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </p>
  )
}

