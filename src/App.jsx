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
import TechServices from './components/pages/TechServices'
import TechRetail from './components/pages/TechRetail'
import SupabaseTest from './components/SupabaseTest'
import AccessControl from './components/pages/TechSolutionsWebPages/AccessControl'
import CCTV from './components/pages/TechSolutionsWebPages/CCTV'
import DigitalSignage from './components/pages/TechSolutionsWebPages/DigitalSignage'
import SoftwareSecurity from './components/pages/TechSolutionsWebPages/SoftwareSecurity'
import PowerManagement from './components/pages/TechSolutionsWebPages/PowerManagement'
import NetworkSecurity from './components/pages/TechSolutionsWebPages/NetworkSecurity'
import CRM from './components/pages/TechSolutionsWebPages/CRM'
import School from './components/pages/TechSolutionsWebPages/School'
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
          <Route path="/tech-solutions/access-control" element={<AccessControl />} />
          <Route path="/tech-solutions/CCTV" element={<CCTV />} />
          <Route path='/tech-solutions/digital-signage' element={<DigitalSignage />} />
          <Route path='/tech-solutions/software-security' element={<SoftwareSecurity />} />
          <Route path='/tech-solutions/power-management' element={<PowerManagement />} />
          <Route path='/tech-solutions/network-security' element={<NetworkSecurity />} />
          <Route path='/tech-solutions/CRM' element={<CRM />} /> 
          <Route path='/tech-solutions/School' element={<School />} /> 
          <Route path="/tech-services" element={<TechServices />} />
          <Route path="/tech-retail" element={<TechRetail />} />
          <Route path="/test-supabase" element={<SupabaseTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App