import "./App.css";
import Header from "./components/header2";
import Carousel from "./components/bootstrapcarousel";
import Gallery from "./components/f2g3";
import Taglines from "./components/taglines";
import Testimonials from "./components/testimonial3";
import Contact from "./components/contact2";
import Footer from "./components/footer5";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Gallery />
      <Taglines />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
