import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="  text-white py-12" style={{backgroundColor:"#000040"}}>
      <div className="max-w-full  lg:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">VDG Media</h3>
            <p className="text-gray-50">
              Bringing your vision to life through expert video and social media services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-50 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-50 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-50 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-50 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-50">
              <li>09 Pink Street, Botshabelo Industrial Park, 9781</li>
              <li>vdgmstudios@gmail.com</li>
              <li>Phone: (+27) 849 881 113</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-50 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-50 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-50 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-50 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-50">
          <p>© 2025 VDG Media. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

