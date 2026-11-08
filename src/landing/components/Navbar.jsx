import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import logoImg from '../../assets/Rectangle.png'
import { useApi } from '../../lib/useApi'

// Dipakai selama /navigation belum selesai dimuat (atau jika API gagal), agar navbar tidak kosong.
const fallbackLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Overview', href: '/overview' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const { key } = useLocation()
  // Menu mobile menyimpan "terbuka pada lokasi mana"; begitu pindah halaman/anchor (key berubah)
  // menunya otomatis dianggap tertutup, tanpa effect (mis. setelah klik "Find your track").
  const [openAt, setOpenAt] = useState(null)
  const open = openAt === key
  const setOpen = (value) => setOpenAt(value ? key : null)
  const { data: links } = useApi('/navigation', { fallback: fallbackLinks })

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="GDGoC" className="h-8 w-auto" />
          <span className="hidden text-sm font-medium leading-tight sm:block">
            Google Developer Groups
            <span className="block text-[10px] text-muted">On Campus • Universitas Gadjah Mada</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? 'bg-brand-soft font-medium text-brand' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/overview#tracks">Find your track</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href="/overview#tracks" className="mt-4 w-full justify-center">
            Find your track
          </Button>
        </div>
      )}
    </header>
  )
}

