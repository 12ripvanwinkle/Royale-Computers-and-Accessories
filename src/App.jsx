import Navbar from './components/Navbar'
import Cards from './components/sections/cards'
import Hero from './components/sections/Hero'
import Markets from './components/sections/Markets'
import ServiceSection from './components/sections/ServiceSection'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Cards />
      <Markets />
    </>
  )
}

export default App