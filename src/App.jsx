import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './landing/components/Navbar'
import Footer from './landing/components/Footer'
import ErrorBoundary from './landing/components/ErrorBoundary'
import Button from './landing/components/Button'
import Home from './landing/pages/Home'
import About from './About/pages/About'
import Overview from './overview/pages/Overview'
import Contact from './Contact/pages/Contact'

// Pindah halaman -> kembali ke atas; link ber-hash (/overview#tracks) -> scroll ke elemennya.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-sm text-muted">We couldn't find the page you're looking for.</p>
      <div className="mt-6 flex justify-center">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  )
}

function Shell() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <ErrorBoundary resetKey={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
