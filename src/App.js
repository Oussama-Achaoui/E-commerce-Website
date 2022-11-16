import React from 'react'
import './App.css';
import NavBar from './Component/NavBar'
import Products from './Component/Products'
import About from './Component/About'
import Home from './Component/Home';
import {Routes, Route} from 'react-router-dom'
import Product from './Component/Product';
import Cart from './Component/Cart';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/Products" element={<Products/> }/>
        <Route path="/Products/:id" element={<Product/>}/>
        <Route path="/About" element={<About/> }/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
