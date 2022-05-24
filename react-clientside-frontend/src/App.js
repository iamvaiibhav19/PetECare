import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Navbar from "./navbar/Navbar";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Contact from "./contact/Contact";
import About from "./about/About";
import Footer from "./footer/Footer";
import LinaerStepper from "./registration/LinaerStepper";
import ServicePage from "./Services/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<LinaerStepper />} />
        <Route path="/services/:title" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
