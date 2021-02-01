import "./App.css";
import Header from "./components1/header2";
import Carousel from "./components1/bootstrapcarousel";
import Gallery from "./components1/f2g3";
import Taglines from "./components1/taglines";
import Testimonials from "./components1/testimonial3";
import Contact from "./components1/contact2";
import Footer from "./components1/footer5";
import Trending from "./components1/trending";
import Categories from "./components1/categories";
// import Test from "./components/test";
import Grid from './components1/grid'

<Router>
       <div className="app">
         <Switch>
           <Route path="/checkout">
             <customCarousel />
             <Header />
             <h1>Checkout</h1>
           </Route>
           <Route path="/login">
             <Header />
             <h1>Login</h1>
            
           </Route>
           <Route path="/">
             <Header />
             <Catalogue />
             <CustomCarousel />
             <Categories />
             <Home />
            

           </Route>
         </Switch>
       </div>
</Router>

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router></Router>
        <Header />
        <Trending name="Trending" />
        <Trending name="All collections" />
        <Trending name="Featured Category" />
        <Grid />
        <Carousel />
        <Gallery />
        <Taglines />
        <Testimonials />
        <Contact />
        <Footer />
        <Categories />
      </Router>


    </div>
  );
}

export default App;
