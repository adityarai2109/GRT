import React from "react";
import DesignerHeading from "../components1/DesignerHeading";
import Test from "../components1/test";
import "./productlist.css";
import Cardarray from "../components1/cardarray";

export default function productlist() {
  return (
    <div>
      <DesignerHeading />
      <div className="product_card">
        {Cardarray.map((card) => {
          return (
            <div>
              <Test card={card} />
            </div>
          );
        })}
        {/* <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test /> */}
      </div>
    </div>
  );
}
