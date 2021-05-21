import React from "react";
import imageHeart from "../images/heart.png";
import imageDelivery from "../images/delivery-truck.png";
import imageQuality from "../images/quality.png";
import "./Footer.css";
export default function Taglines() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-900 flex-shrink-0">
              <img src={imageHeart} alt="Heart" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="tagline-heading text-gray-900 text-2xl title-font text-center font-medium mb-2">
                Customer satisfaction is our top priority
              </h2>
              <p className="tagline-text leading-relaxed text-justify text-center text-base">
                We believe in "Make a customer, not a sale!". Satisfied
                customers are our best source of advertisement. Customers trust
                a brand that never compromises on the quality of the products
                they use and the services they provide to fulfil. To move ahead,
                this is the vital step for us to take in order to build our
                solid brand name and a loyal client base.
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
                We hire professionals for deliveries and try our best to ensure
                that our high quality products are delivered to your doorstep as
                soon as possible. We deliver all across INDIA 🇮🇳.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-purple-900 flex-shrink-0">
              <img src={imageQuality} alt="Quality" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="tagline-heading text-gray-900 text-center text-2xl title-font font-medium mb-2">
                No compromise with the quality of our product
              </h2>
              <p className=" tagline-text leading-relaxed text-justify text-center text-base">
                Our Suits at Gangaram Textiles are made with the best quality
                and highest grade of perfection. They are comfortable as well as
                soft on the skin. These suits are made keeping our customers
                comfort and preference in mind. They are fresh, trendy,
                fashionable and make a great fashion statement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
