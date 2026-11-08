import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-line bg-white text-brand hover:bg-brand-soft',
}

// Path internal ("/overview#tracks") memakai router Link agar tidak reload halaman;
// URL luar dibuka di tab baru; sisanya (mis. "#") tetap <a> biasa.
function SmartLink({ href, className, children }) {
  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  const external = /^https?:\/\//.test(href)
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export default function Button({ variant = 'primary', href = '#', children, className = '' }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </SmartLink>
  )
}

export function TextLink({ href = '#', children, className = '' }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline ${className}`}
    >
      {children}
      <ArrowRight size={14} />
    </SmartLink>
  )
}
