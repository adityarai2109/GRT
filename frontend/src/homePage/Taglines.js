import React from "react";
import imageHeart from "../images/heart.png";
import imageDelivery from "../images/delivery-truck.png";
import imageQuality from "../images/quality.png";
import "./Footer.css";
export default function Taglines() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-900 flex-shrink-0">
              <img src={imageHeart} alt="Heart" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="tagline-heading text-gray-900 text-2xl title-font text-center font-medium mb-2">
                Customer satisfaction is our top priority
              </h2>
              <p className="tagline-text leading-relaxed text-justify text-center text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                maxime inventore minima quam officia expedita, tempora non
                repellendus quod rem aspernatur est deserunt cumque ea ut et
                itaque quibusdam molestias?
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-purple-900 flex-shrink-0">
              <img src={imageDelivery} alt="Delivery" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="tagline-heading text-gray-900 text-2xl text-center title-font font-medium mb-2">
                Fast delivery ensured
              </h2>
              <p className="tagline-text leading-relaxed text-justify text-center text-base pr-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                molestiae expedita ullam iste inventore, placeat, incidunt ea id
                itaque repudiandae accusantium asperiores molestias aspernatur
                reprehenderit cupiditate recusandae adipisci ipsum illo?nte
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-900 flex-shrink-0">
              <img src={imageQuality} alt="Quality" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="tagline-heading text-gray-900 text-center text-2xl title-font font-medium mb-2">
                No compromise with the Quality of our Product
              </h2>
              <p className=" tagline-text leading-relaxed text-justify text-center text-base">
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
