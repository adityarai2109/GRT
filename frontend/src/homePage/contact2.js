import React from "react";

export default function Contact() {
  return (
    <div className="contact2">
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              title="map"
              className="absolute inset-0"
              style={{ filter: "grayscale(0) contrast(1) opacity(1)" }}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              width="100%"
              height="100%"
              frameBorder={0}
            />

            <div className="bg-gray-900 relative mx-auto   flex flex-wrap content-center py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-purple-400 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5">
              Let us know where we can improve
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-100 flex items-start"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-100 flex items-start"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-100 flex items-start"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}