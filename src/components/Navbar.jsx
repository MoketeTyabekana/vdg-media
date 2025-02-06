import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-4 w-4/5 py-5 flex justify-between  items-center lg:px-20 bg-blue-700/95  text-white z-50  rounded-full" >
      <div>
        <h1 className="text-3xl font-bold">VDG <span className="text-orange-400">Media</span></h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-orange-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-orange-400">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/partners" className="hover:text-orange-400">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-blue-800 flex flex-col justify-center items-center"}`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/services">
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/partners">
            Partners
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

