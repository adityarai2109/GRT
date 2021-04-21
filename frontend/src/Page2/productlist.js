import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Range from "../CustomJS/Range";
import MyFooter from "../homePage/myFooter";
import { useEffect } from "react";

const Productlist = (props) => {
  //console.log(props.products);
  const [rangeToggle, setRangeToggle] = useState(true);
  let category = String(props.match.params.category);
  const [sortedCategory, setSortedCategory] = useState("Latest");
  function newstate(newState) {
    let newSortedCategory = [...sortedCategory];
    newSortedCategory = newState;
    setSortedCategory(newSortedCategory);
  }
  // console.log(props.query);
  // for(let i = 0;i < arr.length();i++)
  // {
  //   if(arr[i].price >= a && arr[i].price <= b)
  //     console.log(arr[i])
  // }
  // conditions.some(el => str2.includes(el))

  var words = props.query.toLowerCase().split(" ");
  console.log(words)
  const filteredCardArray = Cardarray.filter(
    (i) => words.some(word => i.title.toLowerCase().includes(word) || i.description.toLowerCase().includes(word)) 
  );
 
// var words = str.split(" ");


  const [value, setValue] = useState([0, 100]);
  function Sortby() {
    if (sortedCategory === "range") {
      //console.log("state : range ", value[0] * 100);
      return filteredCardArray
        .filter((categCard) => categCard.category === category)
        .sort(function (a, b) {
          return a.price - b.price;
        })
        .map((card) => {
          if (card.price >= value[0] * 100 && card.price <= value[1] * 100) {
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
          }
        });
    } else {
      return filteredCardArray
        .filter((categCard) => categCard.category === category)
        .sort(function (a, b) {
          if (sortedCategory === "Latest") {
            let d1 = parseInt(a.createdAt);
            let d2 = parseInt(b.createdAt);
            return d2 - d1;
          } else if (sortedCategory === "lth") {
            return a.price - b.price;
          } else if (sortedCategory === "htl") {
            return b.price - a.price;
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
  }

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  //setSortedCategory("htl")
  return (
    <div className="productlist">
      <DesignerHeading name={category} />
      <div className="orderby">
        <p className="price_htl" onClick={() => newstate("htl")}>
          Price - high to low
        </p>
        <p className="price_lth" onClick={() => newstate("lth")}>
          Price - low to high
        </p>
        <p className="latest" onClick={() => newstate("Latest")}>
          Latest
        </p>
        <p className="range" onClick={() => newstate("range")}>
          {rangeToggle ? (
            <div
              id="input-slider"
              onClick={() => setRangeToggle(false)}
              style={{ width: "300px" }}
              gutterBottom
            >
              Range
            </div>
          ) : (
            <div className="rangebar" style={{height:'64px'}}>
              <Range value={value} setValue={setValue} className="navRange" />
              <button onClick={() => setRangeToggle(true)}>Done</button>
            </div>
          )}
        </p>
      </div>
      <div className="product_card">{Sortby(filteredCardArray)}</div>
      <MyFooter />
    </div>
  );
};

export default Productlist;
