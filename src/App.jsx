import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Cards from './components/sections/cards'
import Hero from './components/sections/Hero'
import Markets from './components/sections/Markets'
import ServiceSection from './components/sections/ServiceSection'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import TechSolutions from './components/pages/TechSolutions'

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tech-solutions" element={<TechSolutions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App