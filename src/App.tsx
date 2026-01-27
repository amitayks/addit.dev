import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash, scroll to the element
    if (hash) {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
