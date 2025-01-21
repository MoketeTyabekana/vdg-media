import { FaPlay } from "react-icons/fa"

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70">
        <div className="h-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bringing Your Vision to Life</h1>
          <h2 className="text-xl md:text-2xl mb-8 max-w-3xl">
            Expert Video & Social Media Services - From concept to execution, we craft stunning visuals that captivate
            and inspire.
          </h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2">
              <FaPlay /> Get a Quote
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

