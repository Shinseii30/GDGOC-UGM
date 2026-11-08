import { Component } from 'react'

/**
 * Menangkap error saat render (mis. data API berbentuk tak terduga) supaya aplikasi
 * tidak menjadi layar putih. `resetKey` (path halaman) mengosongkan error saat pindah halaman.
 */
export default class ErrorBoundary extends Component {
  state = { hasError: false, resetKey: this.props.resetKey }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // Saat resetKey berubah (pindah halaman), error sebelumnya dibuang dan halaman dicoba lagi.
  static getDerivedStateFromProps(props, state) {
    if (props.resetKey !== state.resetKey) return { hasError: false, resetKey: props.resetKey }
    return null
  }

  componentDidCatch(error, info) {
    console.error('Render error:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <section className="mx-auto max-w-xl px-6 py-24 text-center" role="alert">
        <h1 className="text-3xl font-bold tracking-tight">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted">
          This page ran into an unexpected problem. Reloading usually fixes it.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Reload page
          </button>
          <a
            href="/"
            className="rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand-soft"
          >
            Back to home
          </a>
        </div>
      </section>
    )
  }
}
