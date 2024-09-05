import React from 'react';
import "./App.css";
import Sidebr from './components/sidebr/Sidebr';
import About from './components/about/About';
import Home from './components/home/Home';
import Contct from './components/contct/Contct';
import Servcess from './components/services/Servcess';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <>
    <Sidebr />
    <main className='main'>
      <Home />
      <About />
      <Servcess />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contct />
    </main>
    </>
  )
}

export default App
