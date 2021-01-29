import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonial3">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/302x302"
                />
                <p className="leading-relaxed">Majja aa gaya</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Aditya Rai
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/300x300"
                />
                <p className="leading-relaxed">Majja aa gaya</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Keshav Goyal
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://dummyimage.com/305x305"
                />
                <p className="leading-relaxed">Majja aa gaya</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Ritik Raj Raman
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
