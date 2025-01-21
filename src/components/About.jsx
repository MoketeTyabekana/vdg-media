import React from "react";

function About() {
  return (
    <section className="lg:p-20  bg-gray-50">
      <div className="max-w-full flex flex-col justify-center ">
        <h2 className="lg:text-4xl text-orange-400 font-bold text-center mb-6 px-8 py-4 rounded-lg bg-gray-100"  >Who We Are</h2>
        <div>
          <p className=" text-center">
            <strong> VDG Media Studio</strong> is a creative content creation
            and production company dedicated to providing high-quality video
            services. Over the years, we've partnered with clients like
            Botshabelo Digital Hub, Youth Bridge Trust, and Ba2cada Masters
            League, crafting corporate videos and marketing content that make a
            lasting impact. <br /><span><a href="" className=" lg:text-lg text-blue-600 hover:text-blue-800 font-semibold ">Read More →</a></span>
          </p>
          <iframe
            className="w-full h-96 mt-16 shadow-lg rounded-lg"
            src="https://www.youtube.com/embed/asjf6QaZcWo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
