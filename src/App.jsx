import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import About from "./components/About"
import Clients from "./components/Clients"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About/>
        <Services />
        <Gallery />
        <Clients/>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

