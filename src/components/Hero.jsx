import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-custom-gradient bg-cover bg-center  w-full h-screen">
     
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="h-full flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-400">Bringing Your Vision to Life</h1>
          <h2 className="text-xl md:text-2xl mb-8 max-w-3xl">
            Expert Video & Social Media Services - From concept to execution, we craft stunning visuals that captivate
            and inspire.
          </h2>
          <div className="flex gap-4">
            <button className=" bg-orange-600 hover:bg-white hover:text-blue-800 text-white px-16 py-3 rounded-full transition-colors">
            <a href="">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

