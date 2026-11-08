export function Skeleton({ count = 3, className = 'h-24 rounded-2xl' }) {
  return Array.from({ length: count }, (_, i) => (
    <div key={i} aria-hidden="true" className={`animate-pulse bg-gray-200/60 ${className}`} />
  ))
}

export function ErrorMessage({ onRetry }) {
  return (
    <div role="alert" className="col-span-full rounded-2xl border border-line bg-white p-5 text-sm text-muted">
      Couldn't load this content right now.{' '}
      {onRetry && (
        <button type="button" onClick={onRetry} className="font-medium text-brand hover:underline">
          Try again
        </button>
      )}
    </div>
  )
}

export function EmptyMessage({ children = 'Nothing to show here yet. Check back soon.' }) {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-line bg-white p-5 text-sm text-muted">
      {children}
    </div>
  )
}

/**
 * Render data dari useApi: skeleton saat loading, pesan + "Try again" saat gagal,
 * pesan kosong saat API mengembalikan array kosong, dan `children(data)` bila ada data.
 */
export default function Loadable({ state, skeleton, emptyMessage, children }) {
  const { data, error, retry } = state
  if (Array.isArray(data) && data.length === 0) return <EmptyMessage>{emptyMessage}</EmptyMessage>
  if (data != null) return children(data)
  if (error) return <ErrorMessage onRetry={retry} />
  return skeleton ?? <Skeleton />
}
