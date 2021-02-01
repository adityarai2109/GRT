import "./App.css";
import Header from "./components/header2";
import Carousel from "./components/bootstrapcarousel";
import Gallery from "./components/f2g3";
import Taglines from "./components/taglines";
import Testimonials from "./components/testimonial3";
import Contact from "./components/contact2";
import Footer from "./components/footer5";
import Trending from "./components/trending";
import Categories from "./components/categories";
// import Test from "./components/test";
import Grid from './components/grid'

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;
