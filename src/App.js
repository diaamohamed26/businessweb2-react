// App.js
import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/home'
import Services from './Components/services/Services'
import Testimonial from './Components/testimonial/Testimonial'
import Pricing from './Components/pricing/Pricing'
import Blogs from './Components/blogs/Blogs'
import Contact from './Components/contact us/Contact';
import { Element } from 'react-scroll';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="home">
        <Home/>
      </Element>

      <Element name="services" className="services">
        <Services/>
      </Element>

      <Element name="testimonial" className="testimonial">
        <Testimonial/>
      </Element>

      <Element name="pricing" className="pricing">
        <Pricing/>
      </Element>

      <Element name="blogs" className="blogs">
        <Blogs/>
      </Element>

      <Element name="contact" className="contact">
        <Contact/>
      </Element>
    </div>
  );
}

export default App;
