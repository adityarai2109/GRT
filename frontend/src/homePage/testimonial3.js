import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonial3">
      <section className="text-black-400 bg-white-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-wrap -m-4"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://randomuser.me/api/portraits/lego/5.jpg"
                />
                <p className="leading-relaxed">Mast</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-dark font-medium title-font tracking-wider text-sm">
                  Aditya Rai
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
            <div className="lg:w-1/5 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://randomuser.me/api/portraits/lego/2.jpg"
                />
                <p className="leading-relaxed">Majja aa gaya</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-dark font-medium title-font tracking-wider text-sm">
                  Keshav Goyal
                </h2>
                <p className="text-gray-500">Web Developer</p>
              </div>
            </div>
            <div className="lg:w-1/5 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://randomuser.me/api/portraits/lego/3.jpg"
                />
                <p className="leading-relaxed">Majja aa gaya</p>
                <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4" />
                <h2 className="text-dark font-medium title-font tracking-wider text-sm">
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
