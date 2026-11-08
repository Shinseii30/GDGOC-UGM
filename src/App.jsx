import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './landing/components/Navbar'
import Footer from './landing/components/Footer'
import Home from './landing/pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
