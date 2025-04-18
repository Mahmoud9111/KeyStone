import Hero from './Components/Hero'
import Aboutus from './Components/Aboutus'
import Projects from './Components/Projects'
import QA from './Components/Details'
import Discover from './Components/Discover'
import FAQ from './Components/FAQ'
import Footer from './Components/footer'
import { mockProperties } from './lib/propertyData'
import './App.css'

function App() {
  return (
    <>
      <Hero/>
      <Aboutus/>
      <Projects properties={mockProperties}/>
      <QA/>
      <Discover/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
