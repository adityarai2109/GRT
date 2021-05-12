import "./App.css";
import Card from "./homePage/Card";
import Carousel from "./homePage/Carousel";
import Cta from "./homePage/Cta";
import Cta2 from "./homePage/Cta2";
import CtaDecide from "./homePage/CtaDecide";
import DesignerHeading from "./homePage/DesignerHeading";
import Footer from "./homePage/Footer";
import Grid from "./homePage/Grid";
import Info from "./homePage/Info";
import Navbar from "./homePage/Navbar";
import Taglines from "./homePage/Taglines";
import Zoom from "react-reveal/Zoom";
import AddProduct from "./Page4/AddProduct";
import "tailwindcss/tailwind.css";
import Login from "./Page4/Login";

import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

 const baseUrl = "http://localhost:5000/api";
 const imgUrl = "http://localhost:5000";

     useEffect ( () => {
        console.log("ddd")
        const fetchProducts = async () => {
              const res = await axios.get(`${baseUrl}/allproducts`)
              if(res.status === 200){
                 setProducts(res.data)
                 console.log(res.data)
                 console.log(products)
              }
        }
         fetchProducts();
     },[])

  useEffect(() => {
    console.log(query);
  }, [query]);

    useEffect(() => {
    console.log("dark");
    console.log(products)
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? `dark` : null}`}>
      {/* <img src="localhost"></img> */}
      <Router>
        <Switch>
          <Route path="/checkout">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <CtaDecide />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <Navbar
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              query={query}
              setQuery={setQuery}
            />
            <Login />
            <Footer />
          </Route>
          <Route path="/addProduct">
            <Navbar
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              query={query}
              setQuery={setQuery}
            />
            <AddProduct />
            <Footer />
          </Route>
          {/* Page 2 */}
          <Route
            path="/:category"
            exact
            render={(props) => (
              <>
                <Navbar
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                  query={query}
                  setQuery={setQuery}
                />
                <ProductList
                  {...props}
                  query={query}
                  setQuery={setQuery}
                  isDarkMode={isDarkMode}
                  products={products}
                />
              </>
            )}
          />
          {/* Page 3 */}
          <Route
            path="/:category/:ida"
            render={(props) => (
              <>
                <Navbar
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                  query={query}
                  setQuery={setQuery}
                />
                <MainProduct
                  {...props}
                  isDarkMode={isDarkMode}
                  products={products}
                  setProducts={setProducts}
                  query={query}
                  setQuery={setQuery}
                  products={products}
                />
              </>
            )}
          />
          {/* Main Page */}
          <Route path="/">
            <Navbar
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              query={query}
              setQuery={setQuery}
            />
            <div
              style={{
                width: "100%",
                zIndex: "-1",
              }}
            >
              <CtaDecide />
              {/* <Carousel /> */}
            </div>
            {/* <Header /> */}
            {/* {
              products.map((product) => {
              <div>
                 <img src={`${baseUrl}/upload/product.name`} key={product._id} /> 
                <h1>gggg</h1>
              </div>
            })
             } */}

            {/* {products.length > 0
              ? products.map((product) => {
                  return (
                    <div>
                      <img
                        src={`${imgUrl}/upload/${product.image}`}
                        key={product._id}
                        style={{
                          width: "200px",
                          height: "200px",
                          margin: "auto",
                        }}
                      />
                      <h1>{product.name}</h1>
                    </div>
                  );
                })
              : null} */}

            <DesignerHeading name="Trending" />
            <Card isDarkMode={isDarkMode} products={products} />
            <DesignerHeading name="All Collections" />
            <Card isDarkMode={isDarkMode} products={products} />
            <DesignerHeading name="Latest collections" />
            <Card isDarkMode={isDarkMode} products={products} />
            {/* <DesignerHeading name="Featured Category" /> */}
            {/* <Card /> */}
            {/* <Grid /> */}
            {/* <DesignerHeading name="Latest Collection" />
            <Gallery /> */}
            <DesignerHeading name="Commitments" />
            <Taglines />
            {/* <DesignerHeading name="Testimonials" /> */}
            {/* <Testimonials /> */}
            {/* <Contact /> */}
            <DesignerHeading name="Contacts" />
            <Zoom>
              <Info />
            </Zoom>
            <Footer />
            {/* <Loader /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
