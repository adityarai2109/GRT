import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "tailwindcss/tailwind.css";
import Card from "./homePage/Card";
import CtaDecide from "./homePage/CtaDecide";
import DesignerHeading from "./homePage/DesignerHeading";
import Footer from "./homePage/Footer";
import Info from "./homePage/Info";
import Loader from "./CustomJS/Loader";
import Navbar from "./homePage/Navbar";
import Taglines from "./homePage/Taglines";
import Zoom from "react-reveal/Zoom";
import AddProduct from "./Page4/AddProduct";
import Login from "./Page4/Login";
import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";

function App() {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);

    const baseUrl = "http://localhost:5000/api";
    // const imgUrl = "http://localhost:5000";

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`${baseUrl}/allproducts`);
            try {
                if (res.status === 200) {
                    setProducts(res.data);
                    console.log(products);
                }
            } catch (error) {
                console.log("error : ", error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(query);
    }, [query]);

    useEffect(() => {
        console.log("dark");
        console.log(products);
    }, [isDarkMode]);

    return (
        <div className={`App ${isDarkMode ? `dark` : null}`}>
            {/* <img src="localhost"></img> */}
            <Router>
                <Switch>
                    <Route path="/checkout">
                        <Navbar
                            isDarkMode={isDarkMode}
                            setIsDarkMode={setIsDarkMode}
                        />
                        <CtaDecide />
                        <h1>Checkout</h1>
                    </Route>
                    <Route path="/loader">
                        <Loader />
                    </Route>
                    {/* page 4 */}
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
                    <Route
                        path="/addProduct"
                        render={(props) => (
                            <>
                                <Navbar
                                    isDarkMode={isDarkMode}
                                    setIsDarkMode={setIsDarkMode}
                                    query={query}
                                    setQuery={setQuery}
                                />
                                <AddProduct {...props} />
                                <Footer />
                            </>
                        )}
                    />

                    {/* </Route> */}
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
                        {products.length !== 0 ? (
                            <Card isDarkMode={isDarkMode} products={products} />
                        ) : (
                            <Loader isDarkMode={isDarkMode} />
                        )}

                        <DesignerHeading name="All Collections" />
                        {products.length !== 0 ? (
                            <Card isDarkMode={isDarkMode} products={products} />
                        ) : (
                            <Loader isDarkMode={isDarkMode} />
                        )}
                        <DesignerHeading name="Latest collections" />
                        {products.length !== 0 ? (
                            <Card isDarkMode={isDarkMode} products={products} />
                        ) : (
                            <Loader isDarkMode={isDarkMode} />
                        )}
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
