import "./App.css";
import Navbar from "./homePage/navbar";
import Header from "./homePage/header2";
import Carousel from "./homePage/bootstrapcarousel";
import Gallery from "./homePage/f2g3";
import Taglines from "./homePage/taglines";
import Testimonials from "./homePage/testimonial3";
import Contact from "./homePage/contact2";
import Footer from "./homePage/footer5";
import DesignerHeading from "./homePage/DesignerHeading";
// import Test from "./components/test";
import Grid from "./homePage/grid";
import Card from "./homePage/card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Productlist from "./Page2/productlist";
import Productdetail from "./Page2/productdetails";
import MainProduct from "./Page3/MainProduct";

let routeid;
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

          <Route
            path="/:category"
            exact
            render={(props) => <Productlist {...props} />}
          />

          {/* Page 3 */}

          <Route
            path="/:category/:ida"
            render={(props) => <MainProduct {...props} />}
          />

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
