import React, { useState } from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Range from "../CustomJS/Range";

const Productlist = ({ match }) => {
    const [rangeToggle, setRangeToggle] = useState(true);
    let category = String(match.params.category);
    const [sortedCategory, setSortedCategory] = useState("Latest");
    function newstate(newState) {
        let newSortedCategory = [...sortedCategory];
        newSortedCategory = newState;
        setSortedCategory(newSortedCategory);
    }

    // for(let i = 0;i < arr.length();i++)
    // {
    //   if(arr[i].price >= a && arr[i].price <= b)
    //     console.log(arr[i])
    // }

    const [value, setValue] = useState([0, 100]);
    function Sortby() {
        if (sortedCategory === "range") {
            //console.log("state : range ", value[0] * 100);
            return Cardarray.filter(
                (categCard) => categCard.category === category
            )
                .sort(function (a, b) {
                    return a.price - b.price;
                })
                .map((card) => {
                    if (
                        card.price >= value[0] * 100 &&
                        card.price <= value[1] * 100
                    ) {
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
            return Cardarray.filter(
                (categCard) => categCard.category === category
            )
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

    //setSortedCategory("htl")
    return (
        <div>
            <Navbar />
            <DesignerHeading name={category} />
            {/* <hr /> */}
            <div className="orderby">
                {/* <p className="sort">Sort by:</p> */}
                <button className="price_htl" onClick={() => newstate("htl")}>
                    Price - high to low
                </button>
                <button className="price_lth" onClick={() => newstate("lth")}>
                    Price - low to high
                </button>
                <button className="latest" onClick={() => newstate("Latest")}>
                    Latest
                </button>
                <p className="range" onClick={() => newstate("range")}>
                    {rangeToggle ? (
                        <div
                            id="input-slider"
                            onClick={() => setRangeToggle(false)}
                            style={{width:"360px"}}
                            gutterBottom
                        >
                            Range
                        </div>
                    ) : (
                        <div
                            className="rangebar"
                           
                        >
                            <Range value={value} setValue={setValue} className="navRange"/>
                            <button  onClick={() => setRangeToggle(true)}>Done</button>
                        </div>
                    )}
                </p>
            </div>
            {/* <hr /> */}
            <div className="product_card">{Sortby(Cardarray)}</div>
        </div>
    );
};

export default Productlist;
