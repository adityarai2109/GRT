import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import Range from "../CustomJS/Range";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "10000",
  },
];
function valuetext(value) {
  return `${value}°C`;
}

const Productlist = ({ match }) => {
  let category = String(match.params.category);
  // category = category.toString();
  const [sortedCategory, setSortedCategory] = useState("Latest");
  function newstate(newState) {
    let newSortedCategory = [...sortedCategory];
    newSortedCategory = newState;
    setSortedCategory(newSortedCategory);
  }

  /*
  a
  b
  arr[]
  for(int i = 0;i < arr.length();i++)
  {
    if(arr[i].price >= a && arr[i].price <= b)
      console.log(arr[i])
  }
  */
  const [value, setValue] = useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function Sortby() {
    return Cardarray.filter((categCard) => categCard.category === category)
      .sort(function (a, b) {
        if (sortedCategory === "Latest") {
          let d1 = parseInt(a.createdAt);
          let d2 = parseInt(b.createdAt);
          return d2 - d1;
        } else if (sortedCategory === "lth") {
          return a.price - b.price;
        } else if (sortedCategory === "htl") {
          return b.price - a.price;
        } else if (sortedCategory === "range") {
        }
      })
      .map((card) => {
        return (
          <div>
            <Test
              id={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              category={card.category}
            />
          </div>
        );
      });
  }

  //setSortedCategory("htl")
  return (
    <div>
      <Navbar />
      <DesignerHeading name={category} />
      <hr />
      <div className="orderby">
        {/* <p className="sort">Sort by:</p> */}
        <p className="price_htl" onClick={() => newstate("htl")}>
          Price - high to low
        </p>
        <p className="price_lth" onClick={() => newstate("lth")}>
          Price - low to high
        </p>
        <p className="latest" onClick={() => newstate("Latest")}>
          Latest
        </p>
        <p className="range" onClick={() => console.log("Range")}>
          <p>Range</p>
          <Range />
        </p>
      </div>
      <hr />
      <div className="product_card">{Sortby(Cardarray)}</div>
    </div>
  );
};

export default Productlist;
