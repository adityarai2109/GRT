import React, { useState } from "react";
import "tailwindcss/tailwind.css";

//setName(e.target.value)

export default function FormField(props) {
  const [name, setName] = useState("");
  const [material, setMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState({});
  const [bottomLength, setBottomLength] = useState();
  const [duppataLength, setDuppataLength] = useState();
  const [topLength, setTopLength] = useState();

  const handleChange = (e) => {
    if (props.label === "Name") setName(e.target.value);
    if (props.label === "Material") setMaterial(e.target.value);
    if (props.label === "Design") setDesign(e.target.value);
    if (props.label === "Price") setPrice(e.target.value);
    if (props.label === "Bottom Length") setBottomLength(e.target.value);
    if (props.label === "Duppata Length") setDuppataLength(e.target.value);
    if (props.label === "Top Length") setTopLength(e.target.value);
  };

  const handleValue = () => {
    if (props.label === "Name") return name;
    if (props.label === "Material") return material;
    if (props.label === "Design") return design;
    if (props.label === "Price") return price;
    if (props.label === "Bottom Length") return bottomLength;
    if (props.label === "Duppata Length") return duppataLength;
    if (props.label === "Top Length") return topLength;
  };

  const values = {
    name,
    material,
    design,
    topLength,
    bottomLength,
    duppataLength,
    price,
  };
  console.log(values);
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3">
        <label htmlFor="product_name" className="block text-lg text-white">
          {props.label}
        </label>
        <div className="h-10 ml-10 mr-10 mt-2 flex rounded shadow-sm">
          <input
            value={handleValue()}
            type={props.type}
            style={{
              background: "white",
              paddingLeft: "1rem",
            }}
            className="focus:ring-indigo-800 focus:border-indigo-800 text-gray-600  flex-1 block w-full rounded-none rounded-md  sm:text-sm border-gray-700"
            placeholder={props.label}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
