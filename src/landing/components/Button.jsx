import { ArrowRight } from 'lucide-react'

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outline: 'border border-line bg-white text-brand hover:bg-brand-soft',
}

export default function Button({ variant = 'primary', href = '#', children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  )
}

export function TextLink({ href = '#', children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline ${className}`}
    >
      {children}
      <ArrowRight size={14} />
    </a>
  )
}

