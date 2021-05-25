import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios";
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
import PrivateRoute from "./HOC/PrivateRoute";
import Login from "./Page4/Login";
import ProductList from "./Page2/ProductList";
import MainProduct from "./Page3/MainProduct";
import Dashboard from "./Page4/Dashboard";
import FOF from "./fof/fof";
import { AdminContext } from "./context/AdminState";
import AdminNav from "./homePage/AdminNav";

function App() {
  const [products, setProducts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { isModified } = useContext(AdminContext);

  const baseUrl = process.env.REACT_APP_API_URL;

  console.log(process.env.NODE_ENV);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/allproducts`);
      try {
        if (res.status === 200) {
          setProducts(res.data);
        }
      } catch (error) {
        console.log("error : ", error);
      }
    };
    fetchProducts();
  }, [isModified]);

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className={`App ${isDarkMode ? `dark` : null}`}>
      {/* <img src="localhost"></img> */}

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
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />

                <Dashboard isDarkMode={isDarkMode} />
                <Footer />
              </>
            )}
          />

          <Route exact path="/login">
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Login />
            <Footer />
          </Route>

          <PrivateRoute
            exact
            path="/addProduct"
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
                <AddProduct />
                <Footer />
              </>
            )}
          />

          <PrivateRoute
            exact
            path="/editProduct/:id"
            render={(props) => (
              <>
                <AdminNav
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
                <EditProduct
                  isDarkMode={isDarkMode}
                  products={products}
                  setProducts={setProducts}
                  {...props}
                />
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
                <ProductList
                  {...props}
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
                />
              </>
            )}
          />
          {/* Main Page */}
          <Route path="/" exact>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div
              style={{
                width: "100%",
                zIndex: "-1",
              }}
            >
              <CtaDecide />
            </div>
            {/* <Header /> */}

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
    </div>
  );
}

export default App;
