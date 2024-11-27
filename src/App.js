import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import WhatWeDo from './Pages/WhatWeDo';
import Blog from './Pages/Blog';
import Contactus from './Pages/Contactus';
import {
  Routes,
  Route,
}from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/whatwedo" element={<WhatWeDo />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contactus" element={<Contactus />}/>
    </Routes>
    <Footer />
    {/* <About />
    <WhatWeDo />
    <Blog />
    <Contactus />
    <Home /> */}
    </>
  );
}

export default App;
