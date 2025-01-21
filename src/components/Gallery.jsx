import { useState } from "react"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["All", "Videos", "Photos", "Social Media"]

  const galleryItems = [
    {
      id: 1,
      category: "photos",
      image: "https://source.unsplash.com/random/800x600?photography",
      title: "Commercial Photography",
    },
    {
      id: 2,
      category: "videos",
      image: "https://source.unsplash.com/random/800x600?video",
      title: "Brand Video",
    },
    // Add more items as needed
  ]

  return (
    <section className="lg:p-20  bg-gray-200">
       <div className="max-w-full  ">
   <h2 className="text-4xl font-bold text-center  text-orange-400 mb-12px-8 py-4 rounded-lg bg-gray-100">Top Projects</h2>
 </div>
    </section>
  )
}

