import React from "react";

export default function Taglines() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-900 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl title-font text-center font-medium mb-2">
                Customer satisfaction is our top priorirty
              </h2>
              <p className="leading-relaxed text-justify text-center text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolorum voluptas, sed reiciendis sequi eum dignissimos soluta
                hic placeat culpa rem, voluptatum atque sint mollitia esse
                exercitationem nihil quam quod.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-900 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-2xl text-center title-font font-medium mb-2">
                Reason 2
              </h2>
              <p className="leading-relaxed text-justify text-center text-base pr-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                molestiae expedita ullam iste inventore, placeat, incidunt ea id
                itaque repudiandae accusantium asperiores molestias aspernatur
                reprehenderit cupiditate recusandae adipisci ipsum illo?nte 
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-900 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-center text-2xl title-font font-medium mb-2">
                Reason 3
              </h2>
              <p className="leading-relaxed text-justify text-center text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, quidem quo. Odit officia, quae rerum tenetur provident
                iusto dicta expedita deleniti, tempore atque fugit illo. Saepe
                ratione numquam magnam commodi?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
