import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About/>
        <Services />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

