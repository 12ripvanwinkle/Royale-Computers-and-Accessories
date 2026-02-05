import Navbar from './components/Navbar'
import About from './components/sections/About'
import Cards from './components/sections/cards'
import Hero from './components/sections/Hero'
import Markets from './components/sections/Markets'
import ServiceSection from './components/sections/ServiceSection'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Cards />
      <Markets />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App