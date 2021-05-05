import "./App.css";
import Card from "./homePage/Card";
import Carousel from "./homePage/Carousel";
import Cta from "./homePage/Cta";
import DesignerHeading from "./homePage/DesignerHeading";
import Footer from "./homePage/Footer";
import Grid from "./homePage/Grid";
import Info from "./homePage/Info";
import Navbar from "./homePage/Navbar";
import Taglines from "./homePage/Taglines";
import Zoom from "react-reveal/Zoom";
import AddProduct from "./Page4/AddProduct";
import "tailwindcss/tailwind.css"
import Login from "./Page4/Login"

// import Gallery from "./homePage/Unused Files/f2g3";
// import Testimonials from "./homePage/Unused Files/testimonial3";
// import Loader from './CustomJS/Loader'

import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className={`App ${isDarkMode ? `dark` : null}`}>
      {/* <img src="localhost"></img> */}
      <Router>
        <Switch>
          <Route path="/checkout">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Cta />
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
                  products={products}
                  setProducts={setProducts}
                  query={query}
                  setQuery={setQuery}
                  isDarkMode={isDarkMode}
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
                // marginBottom: "-100px",
                // maskImage:
                //   "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
              }}
            >
              <Cta />
              {/* <Carousel /> */}
            </div>
            {/* <Header /> */}
            <DesignerHeading name="Trending" />
            <Card isDarkMode= {isDarkMode}/>

            <DesignerHeading name="All collections" />
            <Card isDarkMode= {isDarkMode}/>

            <DesignerHeading name="Latest collections" />
            <Card isDarkMode= {isDarkMode}/>

            {/* <DesignerHeading name="Featured Category" /> */}
            {/* <Card /> */}
            {/* <Grid /> */}
            
            {/* <DesignerHeading name="Latest Collection" />
            <Gallery /> */}
            <DesignerHeading name="Taglines" />
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
