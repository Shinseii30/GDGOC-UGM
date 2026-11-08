import logoImg from '../../assets/Rectangle.png'

const explore = ['Home', 'About', 'Overview', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="GDGoC" className="h-9 w-auto" />
            <span className="text-lg font-medium leading-tight">
              Google Developer Groups
              <span className="block text-xs text-muted">On Campus • Universitas Gadjah Mada</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">
            A student community for curious minds, shared learning, and technology with purpose.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted">
            {explore.map((e) => (
              <li key={e}>
                <a href="#" className="hover:text-ink">{e}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Keep in the loop</h4>
          <a href="#" className="text-sm text-brand hover:underline">@gdgoc.ugm</a>
          <p className="mt-6 text-xs text-muted">Learn together. Build together.</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 border-t border-line px-6 py-5 text-[11px] text-muted sm:flex-row">
        <span>© GDGoC Universitas Gadjah Mada • 2026/2027</span>
        <span>Made for the campus. Open to possibilities.</span>
      </div>

      <div className="flex h-1 w-32 sm:ml-6">
        <div className="flex-1 bg-[#4285f4]" />
        <div className="flex-1 bg-[#ea4335]" />
        <div className="flex-1 bg-[#fbbc04]" />
        <div className="flex-1 bg-[#34a853]" />
      </div>
    </footer>
  )
}

