import "./App.css";

import Card from "./homePage/Card";
import Carousel from "./homePage/Carousel";
import DesignerHeading from "./homePage/DesignerHeading";
import Footer from "./homePage/Footer";
import Grid from "./homePage/Grid";
import Info from "./homePage/Info";
import Navbar from "./homePage/Navbar";
import Taglines from "./homePage/Taglines";

// import Gallery from "./homePage/Unused Files/f2g3";
// import Testimonials from "./homePage/Unused Files/testimonial3";
// import Loader from './CustomJS/Loader'

import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";




function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

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
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Carousel />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            <Link to="/about">About</Link>
          </Route>

          {/* Page 2 */}

          <Route
            path="/:category"
            exact
            render={(props) => (
              <>
                <Navbar query={query} setQuery={setQuery} />
                <ProductList
                  {...props}
                  products={products}
                  setProducts={setProducts}
                  query={query}
                  setQuery={setQuery}
                />
              </>
            )}
          />

          {/* Page 3 */}

          <Route
            path="/:category/:ida"
            render={(props) => (
              <>
                <Navbar query={query} setQuery={setQuery} />
                <MainProduct
                  {...props}
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
            <Navbar query={query} setQuery={setQuery} />
            <div
              style={{
                width: "100%",
                zIndex: "-1",
                marginBottom: "-100px",
                // maskImage:
                //   "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
              }}
            >
              <Carousel />
            </div>
            {/* <Header /> */}
            <DesignerHeading name="Trending" />
            <Card />

            <DesignerHeading name="All collections" />
            <Card />

            <DesignerHeading name="Latest collections" />
            <Card />

            <DesignerHeading name="Featured Category" />
            {/* <Card /> */}
            <Grid />
            {/* <DesignerHeading name="Latest Collection" />
            <Gallery /> */}
            <DesignerHeading name="Taglines" />
            <Taglines />
            {/* <DesignerHeading name="Testimonials" /> */}
            {/* <Testimonials /> */}
            {/* <Contact /> */}
            <DesignerHeading name="Contacts" />
            <Info />
            <Footer />
            {/* <Loader /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
