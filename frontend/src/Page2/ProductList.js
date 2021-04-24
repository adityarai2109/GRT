import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Listing from "../homePage/Listing";
import "./ProductList.css";
import Cardarray from "../homePage/CardArray";
import Pagination from '../CustomJS/Pagination';
import Range from "../CustomJS/Range";
import Footer from "../homePage/Footer";
import { useEffect } from "react";
import {Button} from "@material-ui/core";
import viewMore from "../images/file-search.svg";

const ProductList = (props) => {
//   var i,j,temparray,chunk = 5;
// for (i=0,j=array.length; i<j; i+=chunk) {
//     temparray = array.slice(i,i+chunk);
//     // do whatever
// }
  //console.log(props.products);
  const [rangeToggle, setRangeToggle] = useState(true);
  let category = String(props.match.params.category);
  const [sortedCategory, setSortedCategory] = useState("Latest");

  const [pageArray, setPageArray] = useState(4);
  console.log(pageArray);


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

  const filteredCardArray = Cardarray.filter(
    (i) => words.some(word => i.title.toLowerCase().includes(word) || i.description.toLowerCase().includes(word)) 
  );
 
  const [value, setValue] = useState([0, 100]);
  function Sortby() {
    if (sortedCategory === "range") {
      //console.log("state : range ", value[0] * 100);
      return filteredCardArray
        .filter((categCard) => categCard.category === category && categCard.price >= value[0] * 100 && categCard.price <= value[1] * 100)
        .sort(function (a, b) {
          return a.price - b.price;
        })
        .slice(0, pageArray)
        .map((card) => {
            return (
              <div>
                <Listing
                  id={card.id}
                  image={card.image}
                  title={card.id}  
                  price={card.price}
                  category={card.category}
                />
              </div>
            );
          
        });
        props.setQuery("");
    console.log(props.query);
    } else {
      return filteredCardArray
        .filter((categCard) => categCard.category === category && categCard.price >= value[0] * 100 && categCard.price <= value[1] * 100)
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
        .slice(0, pageArray)
        .map((card) => {
          // console.log(card)
          // if(card.price >= value[0] * 100 && card.price <= value[1] * 100)
          return (
            <div>
              <Listing
                id={card.id}
                image={card.image}
                title={card.id}
                price={card.price}
                category={card.category}
              />
            </div>
          );
        });
        props.setQuery("");
    console.log(props.query);
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
      <h1 className="results">Showing results for : {props.query}</h1>
      <div className="product_card">{Sortby(filteredCardArray)}</div>
      
      <Button variant="outlined" color="default" style={{ margin: "1rem" ,color:"#6B2097" ,border:"2px solid #6B2097"}} onClick={() => setPageArray(pageArray+4)}>
            <img style={{ height: "4vh" }} src={viewMore} alt="View More" />
            <p style={{color:"#6B2097",fontFamily:"Poppins",fontWeight:"bold"}}>View more</p>
      </Button>
      <Footer />
    </div>
  );
};

export default ProductList;
