import { useState } from 'react';
import './App.css';
import Brands from './component/Brands/Brands';
import Sales from './component/names/market/Sales';
import Navbar from './component/nav__bar/Navbar';
import Slider from './component/slider/Slider';
import Form from './component/Form/Form';
import Boxes from './component/smart_objects/Boxes';
import Find from './component/find/Find';
import See from './component/See_all/See';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Brands/>
      <Sales/>
      <Form/>
      <Boxes/>
      <Find/>
      <See/>
      <Footer/>
    </div>
  );
}

export default App;
