import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import FAQS from "./pages/FAQS";

import Services from "./pages/Services";
import ServiceTemplate from "./components/ServiceTemplate";
import { SERVICES } from "./data/services";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<ServiceTemplate service={SERVICES[0]} />} />
        <Route path="/book" element={<Book />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
