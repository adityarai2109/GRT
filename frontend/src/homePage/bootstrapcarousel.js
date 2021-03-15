import React from "react";
import "./carousel.css";
import image1 from "../images/mimage1.jpeg";
import image7 from "../images/carouselA.jpeg";
import image8 from "../images/CarouselB.jpeg";
import image4 from "../images/mimage4.jpeg";
import image5 from "../images/mimage5.jpeg";
import image6 from "../images/mimage6.jpeg";

export default function Carousel() {
  return (
    <div className="bootstrapcarousel">
      <div
        className="carousel relative shadow-2xl bg-white"
        style={{ width: "80vw" }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          {/*Slide 1*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            defaultChecked="checked"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "auto" }}
          >
            <div className="block w-full bg-red-700 text-white text-5xl text-center">
              <img
                src={image5}
                style={{
                  marginLeft: "50%",
                  transform: "translate(-50%)",
                  objectFit: "contain",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 2*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "auto" }}
          >
            <div className="block h-full w-full bg-blue-500 text-white text-5xl text-center">
              <img
                src={image7}
                style={{
                  marginLeft: "50% ",
                  transform: "translate(-50%)",
                  objectFit: "contain",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 3*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "auto" }}
          >
            <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
              <img
                src={image8}
                style={{
                  marginLeft: "50% ",
                  transform: "translate(-50%)",
                  objectFit: "contain",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Add additional indicators for each slide*/}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}