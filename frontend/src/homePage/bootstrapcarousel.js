import React from "react";
import "./carousel.css";
import image7 from "../images/carousel_collage1.jpeg";
import image8 from "../images/carousel_collage1.jpeg";
import image5 from "../images/carousel_collage1.jpeg";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
export default function Carousel() {
  /*

  width:100%;
  z-inedx:-1;
  margin-bottom : -150px;
  mask-image : linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));

*/

  return (
    <div
      className="bootstrapcarousel"
      style={{ marginLeft: "0", marginRight: "0" }}
    >
      <div
        className="carousel relative shadow-2xl bg-white"
        style={{ width: "100vw" }}
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
                  width: "100vw",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-20 h-100 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bolder text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto bg-opacity-0"
          >
            <NavigateBeforeIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-20 h-100 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bolder text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto bg-opacity-0"
          >
            <NavigateNextIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
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
                  width: "100vw",
                  objectFit: "contain",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-20 h-100 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto bg-opacity-0"
          >
            <NavigateBeforeIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-20 h-100 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bolder text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto bg-opacity-0"
          >
            <NavigateNextIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
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
                  width: "100vw",
                  objectFit: "contain",
                }}
                alt="img"
              />
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-20 h-100 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 left-0 my-auto bg-opacity-0"
          >
            <NavigateBeforeIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-20 h-100 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bolder text-black rounded-full bg-white leading-tight text-center z-10 inset-y-0 right-0 my-auto bg-opacity-0"
          >
            <NavigateNextIcon style={{"height":"100%", "fontSize":"xx-large", "fontWeight":"bolder"}}/>
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
