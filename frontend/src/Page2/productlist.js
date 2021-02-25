import React from "react";
import DesignerHeading from "../homePage/DesignerHeading";
import Test from "../homePage/test";
import "./productlist.css";
import Navbar from "../homePage/navbar";
import Cardarray from "../homePage/cardarray";

const productlist = ({match}) => {
  let category =  String(match.params.category);
  console.log(category)

  // category = category.toString();
  
  return (
    <div>
      <Navbar />
      <DesignerHeading name={category}/>
      <div className="orderby">
        <div><b>Sort by:</b></div>
        <div>Popularity</div>
        <div>Price--high to low</div>
        <div>Price--low to high</div>
        <div>Newest first</div>
      </div>
      
      <div className="product_card">
      
        {Cardarray.filter(categCard => categCard.category === category).map((card) => {
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
        })}
      </div>
    </div>
  );
}

export default productlist;