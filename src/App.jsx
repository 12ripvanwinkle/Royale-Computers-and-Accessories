import Navbar from './components/Navbar'
import About from './components/sections/About'
import Cards from './components/sections/cards'
import Hero from './components/sections/Hero'
import Markets from './components/sections/Markets'
import ServiceSection from './components/sections/ServiceSection'
import Holder from './components/sections/holder'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Cards />
      <Markets />
      <About />
      {/* <Holder /> */}
    </>
  )
}

export default App