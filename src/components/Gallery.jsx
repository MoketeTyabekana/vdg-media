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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.toLowerCase() ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

