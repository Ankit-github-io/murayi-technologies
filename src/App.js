import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/services" element={<Services /> } />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
  </>
}
export default App;