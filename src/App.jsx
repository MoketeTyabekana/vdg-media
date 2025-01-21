import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

