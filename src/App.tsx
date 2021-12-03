import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Slider from "./Slider";
import Products from "./Products";
import Navigation from "./Navigation";
import Product from "./Product";
import Cart from "./Cart";
import Men from "./Men";
import Women from "./Women";
import Electronics from "./Electronics";
import All from "./All";
import Jewellery from "./Jewellery";


function App() {
  return (
  <>
  <Navigation/>
<Routes>
  <Route path="/" element={<Slider />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Product />} />
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/men" element={<Men />} />
  <Route path="/women" element={<Women />} />
  <Route path="/electronics" element={<Electronics />} />
   
  <Route path="/all" element={<All />} />
  <Route path="/jewellery" element={<Jewellery />} />


</Routes> 
  </>
  );
}

export default App;
