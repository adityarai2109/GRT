import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "../axios";
import "./EditProduct.css";
import "tailwindcss/tailwind.css";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { dragOver, dragEnter, dragLeave, fileDrop } from "./dragDrop";
import { useHistory } from "react-router-dom";
import { Toast, Toasty } from "./Toasty";
import { toast } from "react-toastify";
import Loader from "../CustomJS/Loader";
import { AdminContext } from "../context/AdminState";

const EditProduct = (props) => {
  const { signOut, token, handleModify } = useContext(AdminContext);

  const imgUrl = process.env.REACT_APP_IMAGE_FETCH_API;
  const img_Upload_Url = process.env.REACT_APP_CLOUD_UPLOAD_API;
   const preset_name = process.env.REACT_APP_CLOUD_PRESET; 

  let history = useHistory();
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [imageTitle, setImageTitle] = useState("");
  const [imgName, setImgName] = useState("");
  const [image, setImage] = useState({});
  const [bottomLength, setBottomLength] = useState();
  const [duppataLength, setDuppataLength] = useState();
  const [topLength, setTopLength] = useState();
  const [preview, setPreview] = useState(true);
  const [success, setSuccess] = useState(false);
  const [imgUpload, setImgUpload] = useState(false);

  useEffect(() => {
    if (props.products.length !== 0) {
      console.log(props.products);
      const myProduct = props.products.filter(
        (i) => i._id === props.match.params.id
      )[0];
      setName(myProduct.name);
      setMaterial(myProduct.material);
      setDesign(myProduct.design);
      setDescription(myProduct.description);
      setPrice(myProduct.price);
      setBottomLength(myProduct.bottomLength);
      setDuppataLength(myProduct.duppataLength);
      setTopLength(myProduct.topLength);
      setImgName(myProduct.image);
      console.log(`${imgUrl}${myProduct.image}`);
    }
  }, [props.products.length]);

  const handleImage = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    setPreview(true);
    setImgUpload(true);
  };

  const handleDrop = (e) => {
    var dropImg = fileDrop(e);
    if (dropImg != null) {
      setImage(dropImg);
      // console.log(URL.createObjectURL(dropImg));
      setPreview(true);
      setImgUpload(true);
    }
  };

  const clearImage = () => {
    setPreview(false);
    setImage({});
  };

  const submitProductForm = async (dp_name) => {
    console.log(dp_name);
     
    let productData = {
      name,
      material,
      design,
      bottomLength,
      duppataLength,
      topLength,
      description,
      price,
      image: typeof dp_name != "undefined" ? dp_name : imgName,
    };

    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };

    try {
      const res = await axios.put(
        `/editProduct/${props.match.params.id}`,
        productData,
        config
      );
      if (res.status === 200) {
        console.log(" updated via :) frontend ");

        setSuccess(false);
        toast.dismiss();
         handleModify();

        setTimeout(() => {
          history.push("/dashboard");
        }, 2500);
       
         
        Toast("success", "Product updated successfully!! ");
      }
    } catch (error) {
      setTimeout(() => {
        //  history.push("/login");
        signOut();
      }, 2500);

      error.response
        ? Toast("error", `${error.response.data.message}`)
        : Toast("error", "server timeout");
    }
  };

  const postDetails = async () => {
    const imgData = new FormData();
    imgData.append("file", image);
    imgData.append("upload_preset", preset_name);
    imgData.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);

    try {
      const res = await axios.post(`${img_Upload_Url}`, imgData);

      if (res.status === 200) {
        const img_name = res.data.public_id + "." + res.data.format;
        setImgName(img_name);
        console.log(imgName);
        console.log(img_name);
        return img_name;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitEditedForm = (e) => {
    e.preventDefault();
     window.scrollTo(0, 0);
     Toast("info", "uploading");
    console.log(image);
    if (image  && Object.keys(image).length === 0 && image.constructor === Object) {
       console.log("empty");
      submitProductForm();
    } else {
      console.log("cloud");
      postDetails()
        .then((img_name) => {
          submitProductForm(img_name);
        })
        .catch((e) => signOut());
    }
  };

  return (
    <>
      {/* <div className="img">
            <img src="http://localhost:5000/upload/minions.jpg" alt="" />
            <h1 style={{ color: "#fff" }}>
              backend se photo finally aa gyi 😄{" "}
            </h1>
          </div> */}
      {imgName === "" ? (
        <div style={{ minHeight: "60vh", marginTop: "20vh" }}>
          <Loader isDarkMode={props.isDarkMode} />
        </div>
      ) : (
        <div className="addproduct container mx-auto">
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5"></div>
          </div>
          <div
            style={{
              paddingBottom: "1.5rem",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
            className="grid bg-white rounded grid-cols-1 gap-5 back"
          >
            <div className="mt-5 col-span-2">
              <form onSubmit={submitEditedForm}>
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
                            value={name}
                            id="product_name"
                            className="focus:ring-indigo-800 focus:border-indigo-800 text-gray-600  flex-1 block w-full rounded-none rounded-md  sm:text-sm border-gray-700"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3">
                        <label
                          htmlFor="product_name"
                          className="block text-lg text-white"
                        >
                          Material
                        </label>
                        <div className="h-10 ml-10 mr-10 mt-2 flex rounded shadow-sm">
                          <input
                            style={{
                              background: "white",
                              paddingLeft: "1rem",
                            }}
                            type="text"
                            value={material}
                            id="product_name"
                            className="focus:ring-indigo-800 focus:border-indigo-800 text-gray-600  flex-1 block w-full rounded-none rounded-md  sm:text-sm border-gray-700"
                            placeholder="Material"
                            onChange={(e) => setMaterial(e.target.value)}
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
                          Design
                        </label>
                        <div className="h-10 ml-10 mr-10 mt-2 flex border-solid">
                          <input
                            type="text"
                            style={{
                              background: "white",
                              paddingLeft: "1rem",
                            }}
                            value={design}
                            id="product_quantity"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                            placeholder="Design"
                            onChange={(e) => setDesign(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                          <label
                            htmlFor="product_quantity"
                            className="block text-m text-white"
                          >
                            Top-Length
                          </label>
                          <div className="h-10 ml-10 mr-10 mt-2 flex border-solid">
                            <input
                              type="number"
                              style={{
                                background: "white",
                                paddingLeft: "1rem",
                              }}
                              value={topLength}
                              id="product_quantity"
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                              placeholder="Top length"
                              onChange={(e) => setTopLength(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                          <label
                            htmlFor="product_quantity"
                            className="block text-m text-white"
                          >
                            Duppata-Length
                          </label>
                          <div className="h-10 ml-10 mr-10 mt-2 flex border-solid">
                            <input
                              type="number"
                              style={{
                                background: "white",
                                paddingLeft: "1rem",
                              }}
                              value={duppataLength}
                              id="product_quantity"
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                              placeholder="Duppata length"
                              onChange={(e) => setDuppataLength(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                          <label
                            htmlFor="product_quantity"
                            className="block text-m text-white"
                          >
                            Bottom-Length
                          </label>
                          <div className="h-10 ml-10 mr-10 mt-2 flex border-solid">
                            <input
                              type="number"
                              style={{
                                background: "white",
                                paddingLeft: "1rem",
                              }}
                              value={bottomLength}
                              id="product_quantity"
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                              placeholder="Bottom length"
                              onChange={(e) => setBottomLength(e.target.value)}
                            />
                          </div>
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
                            type="number"
                            style={{
                              background: "white",
                              color: "black",
                              paddingLeft: "1rem",
                            }}
                            value={price}
                            id="product_price"
                            className="border-black flex-1 block w-full rounded-none rounded-md"
                            placeholder="Product price"
                            onChange={(e) => setPrice(e.target.value)}
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
                          value={description}
                          rows={7}
                          style={{
                            background: "white",
                            paddingLeft: "1rem",
                            color: "black",
                            outlineWidth: "0",
                          }}
                          className="text-justify shadow-sm pt-3 pr-3 focus:ring-indigo-500 focus:border-indigo-800 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur quae quibusdam porro laudantium esse? A perferendis ad nulla eveniet. Officiis provident maxime porro id, perferendis minus earum eligendi illo. Aliquam dolorem alias quidem debitis repellendus mollitia pariatur doloremque consequatur quam sequi quos provident ab culpa sit iure rem odit aut corporis, illo minima, doloribus maiores! Tempora ipsam reiciendis inventore."
                          defaultValue={""}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    {preview ? (
                      <div
                        className="preview"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div className="preview-clear">
                          <label className="block text-lg text-white">
                            Preview
                          </label>
                          <CloseIcon
                            onClick={clearImage}
                            className="close-icon"
                          />
                        </div>
                        {!imgUpload ? (
                          imgName !== "" ? (
                            <img
                              style={{
                                minHeight: "40vh",
                                minWidth: "auto",
                              }}
                              src={`${imgUrl}${imgName}`}
                              alt=""
                            />
                          ) : null
                        ) : (
                          <img src={URL.createObjectURL(image)} alt="" />
                        )}
                        {/* {console.log(image)} */}
                        {/* IMAGE NAME */}
                        {!imgUpload ? (
                          imageTitle !== "" ? (
                            <h2 className="block text-s text-white">
                              {imageTitle}
                            </h2>
                          ) : (
                            <h3>Your product</h3>
                          )
                        ) : (
                          <h4 className="block text-s text-white">
                            {image.name}
                          </h4>
                        )}
                      </div>
                    ) : (
                      <div>
                        <label className="block text-lg text-white">
                          Cover photo
                        </label>
                        <div
                          className="mt-1 ml-10 mr-10 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                          onDragOver={dragOver}
                          onDragEnter={dragEnter}
                          onDragLeave={dragLeave}
                          onDrop={handleDrop}
                        >
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
                                className="p-0 relative cursor-pointer "
                              >
                                <span
                                  style={{
                                    color: "aliceblue",
                                    fontWeight: "bolder",
                                    textDecoration: "underline",
                                  }}
                                >
                                  Upload a file
                                </span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleImage}
                                  accept="png jpg jpeg"
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
                    )}
                  </div>
                  <div className="w-full px-4 py-3">
                    <button
                      style={{
                        width: "85%",
                        color: "black",
                        background: "white",
                        outlineWidth: "0",
                      }}
                      type="submit"
                      className="save-btn"
                    >
                      Save
                    </button>
                    {Toasty()}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
