import "./App.css";
import Navbar from "./components1/navbar";
import Header from "./components1/header2";
import Carousel from "./components1/bootstrapcarousel";
import Gallery from "./components1/f2g3";
import Taglines from "./components1/taglines";
import Testimonials from "./components1/testimonial3";
import Contact from "./components1/contact2";
import Footer from "./components1/footer5";
import DesignerHeading from "./components1/DesignerHeading";
// import Test from "./components/test";
import Grid from "./components1/grid";
import Card from "./components1/card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Productlist from "./Page2/productlist";
import Productdetail from "./Page2/productdetails";
import MainProduct from "./Page3/MainProduct"

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/checkout">
                        <Carousel />
                        <Header />
                        <h1>Checkout</h1>
                    </Route>
                    <Route path="/login">
                        <Header />
                        <h1>Login</h1>
                        <Link to="/about">About</Link>
                    </Route>

                    {/* Page 2 */}

                    <Route path="/page2">
                        <Navbar />
                        <Productlist />
                        <Productdetail />
                    </Route>

                    {/* Page 3 */}

                    <Route path="/page3">
                        <Navbar />
                        <MainProduct />
                        <Footer />
                    </Route>

                    {/* Main Page */}

                    <Route path="/">
                        <Navbar />
                        <Carousel />
                        {/* <Header /> */}
                        <DesignerHeading name="Trending" />
                        <Card />
                        <DesignerHeading name="All collections" />
                        <Card />
                        <DesignerHeading name="Featured Category" />
                        {/* <Card /> */}
                        <Grid />
                        <DesignerHeading name="Latest Collection" />
                        <Gallery />
                        <Taglines />
                        <DesignerHeading name="Testimonials" />
                        <Testimonials />
                        <Contact />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
