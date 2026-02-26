import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Cards from './components/sections/cards'
import Hero from './components/sections/Hero'
import Markets from './components/sections/Markets'
import ServiceSection from './components/sections/ServiceSection'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Holder from './components/sections/Footer'
import TechSolutions from './components/pages/TechSolutions'
import TechServices from './components/pages/TechServices'
import TechRetail from './components/pages/TechRetail'

// Create a HomePage component that holds all your sections
const HomePage = () => (
  <>
    <Hero />
    <ServiceSection />
    <Cards />
    <Markets />
    <About />
    <Contact />
    <Footer />
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/images/bgVid.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* App Content */}
      <div className="app-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
          <Route path="/tech-services" element={<TechServices />} />
          <Route path="/tech-retail" element={<TechRetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App