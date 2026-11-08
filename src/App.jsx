import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './landing/components/Navbar'
import Footer from './landing/components/Footer'
import Home from './landing/pages/Home'
import About from './About/pages/About'
import Contact from './Contact/pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
