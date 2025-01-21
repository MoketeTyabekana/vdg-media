import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-800/90 text-white z-50">
      <div>
        <h1 className="text-3xl font-bold">VDG Media</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-blue-500">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/partners" className="hover:text-blue-500">
            Partners
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500">
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

