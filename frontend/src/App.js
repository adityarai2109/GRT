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
import EditProduct from "./Page4/EditProduct";
import PrivateRoute from './HOC/PrivateRoute'
import Login from "./Page4/Login";
import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";
import Dashboard from "./Page4/Dashboard";
import FOF from "./fof/fof";
import AdminState from './context/AdminState'

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const baseUrl = process.env.REACT_APP_API_URL + "/api";

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`${baseUrl}/allproducts`);
      try {
        if (res.status === 200) {
          setProducts(res.data);
        }
      } catch (error) {
        console.log("error : ", error);
      }
    };
    fetchProducts();
  }, [baseUrl]);

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className={`App ${isDarkMode ? `dark` : null}`}>
      {/* <img src="localhost"></img> */}
      <AdminState>
        <Router>
          <Switch>
            <Route exact path="/checkout">
              <CtaDecide />
              <h1>Checkout</h1>
            </Route>

            {/* page 4 */}

            <PrivateRoute
              exact
              path="/dashboard"
              render = {(props) =>
                <>
                  <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    query={query}
                    setQuery={setQuery}
                  />
                  <Dashboard isDarkMode={isDarkMode} products={products} />
                  <Footer />
                </>
              }
            />

            <Route exact path="/login">
              <Navbar
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                query={query}
                setQuery={setQuery}
              />
              <Login />
              <Footer />
            </Route>

            <PrivateRoute
              exact
              path="/addProduct"
              render = { (props) =>
                <>
                  <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    query={query}
                    setQuery={setQuery}
                  />
                  <AddProduct />
                  <Footer />
                </>
              }
            />

            <PrivateRoute
              exact
              path="/editProduct/:id"
              render = {(props) =>
                <>
                  <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    query={query}
                    setQuery={setQuery}
                  />
                  <EditProduct
                    isDarkMode={isDarkMode}
                    products={products}
                    setProducts={setProducts}
                    {...props}
                  />
                  <Footer />
                </>
              }
            />

            {/* </Route> */}
            {/* Page 2 */}
            <Route
              path="/:category"
              exact
              render={(props) => (
                <>
                  <ProductList
                    {...props}
                    query={query}
                    setQuery={setQuery}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    products={products}
                  />
                </>
              )}
            />
            {/* Page 3 */}
            <Route
              path="/:category/:ida"
              exact
              render={(props) => (
                <>
                  <MainProduct
                    {...props}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    products={products}
                    setProducts={setProducts}
                    query={query}
                    setQuery={setQuery}
                  />
                </>
              )}
            />
            {/* Main Page */}
            <Route path="/" exact>
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
              </div>
              {/* <Header /> */}

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
              {/* <DesignerHeading name="Latest Collection" /> */}
              {/* <Gallery /> */}
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
            <Route component={FOF} />
          </Switch>
        </Router>
      </AdminState>
    </div>
  );
}

export default App;
