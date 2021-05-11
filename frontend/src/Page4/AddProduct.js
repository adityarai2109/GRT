import "./AddProduct.css";
import "tailwindcss/tailwind.css";
import React from "react";

export default function Example() {

  const handleChangeImg = (e) =>{
    console.log(e.target.files[0])
  }

  return (
    <> 
      <div className = "img">
        <img src="http://localhost:5000/upload/minions.jpg" />
        <h1 style = {{color : "#fff"}}>backend se photo finally aa gyi :) </h1>
      </div>
      <div className="addproduct container mx-auto">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5"></div>
        </div>
        <div
          style={{ paddingBottom: "1.5rem", marginTop: "1rem" }}
          className="grid bg-white rounded grid-cols-1 gap-5 back"
        >
          <div className="mt-5 col-span-2">
            <form method="POST">
              <div className=" rounded overflow-hidden ">
                <div className="px-2 py-2 space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="product_name"
                        className="block text-lg text-white"
                      >
                        Name
                      </label>
                      <div className="h-10 ml-10 mr-10 mt-2 flex rounded shadow-sm">
                        <input
                          style={{
                            background: "white",
                            paddingLeft: "1rem",
                          }}
                          type="text"
                          name="product_name"
                          id="product_name"
                          className="focus:ring-indigo-800 focus:border-indigo-800 text-gray-600  flex-1 block w-full rounded-none rounded-md  sm:text-sm border-gray-700"
                          placeholder="Product Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="product_quantity"
                        className="block text-lg text-white"
                      >
                        Quantity
                      </label>
                      <div className="h-10 ml-10 mr-10 mt-2 flex border-solid">
                        <input
                          type="text"
                          style={{
                            background: "white",
                            paddingLeft: "1rem",
                          }}
                          name="product_quantity"
                          id="product_quantity"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                          placeholder="Product quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="product_price"
                        className="block text-lg text-white"
                      >
                        Price
                      </label>
                      <div className="h-10 ml-10 mr-10 mt-2 flex rounded ">
                        <input
                          type="text"
                          style={{
                            background: "white",
                            color: "black",
                            paddingLeft: "1rem",
                          }}
                          name="product_price"
                          id="product_price"
                          className="border-black flex-1 block w-full rounded-none rounded-md"
                          placeholder="Product price"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="product_description"
                      className="block text-lg text-white"
                    >
                      Description
                    </label>
                    <div className="ml-10 mr-10 mt-2">
                      <textarea
                        id="product_description"
                        name="product_description"
                        rows={7}
                        style={{
                          background: "white",
                          paddingLeft: "1rem",
                          color: "black",
                        }}
                        className="text-justify shadow-sm pt-3 pr-3 focus:ring-indigo-500 focus:border-indigo-800 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur quae quibusdam porro laudantium esse? A perferendis ad nulla eveniet. Officiis provident maxime porro id, perferendis minus earum eligendi illo. Aliquam dolorem alias quidem debitis repellendus mollitia pariatur doloremque consequatur quam sequi quos provident ab culpa sit iure rem odit aut corporis, illo minima, doloribus maiores! Tempora ipsam reiciendis inventore."
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg text-white">
                      Cover photo
                    </label>
                    <div className="mt-1 ml-10 mr-10 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-white">
                          <label
                            htmlFor="file-upload"
                            className="p-0 relative cursor-pointer rounded-md font-medium text-indigo-100 hover:text-indigo-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleChangeImg}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-white">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 py-3">
                  <button
                    style={{
                      width: "85%",
                      color: "black",
                      background: "white",
                    }}
                    type="submit"
                    className="block w-100 inline-flex justify-center py-2 px-4 border border-white rounded-md text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
