import { FaVideo, FaInstagram, FaCamera } from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: <FaVideo size={40} />,
      title: "Video Production",
      services: ["Video shooting", "Editing & post-production", "Storyboarding and scriptwriting"],
    },
    {
      icon: <FaInstagram size={40} />,
      title: "Social Media Marketing",
      services: ["Content creation", "Paid advertising", "Analytics and strategy"],
    },
    {
      icon: <FaCamera size={40} />,
      title: "Photography",
      services: ["Product shoots", "Event photography", "Portrait and lifestyle"],
    },
  ]

  return (
    <section className="lg:p-20  bg-gray-100">
      <div className="max-w-full  ">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.services.map((item, i) => (
                  <li key={i} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

