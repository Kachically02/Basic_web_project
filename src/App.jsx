import React from "react";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/testimonial" element={<Testimonial/>}/>
    </Routes>
  );
}

export default App;
