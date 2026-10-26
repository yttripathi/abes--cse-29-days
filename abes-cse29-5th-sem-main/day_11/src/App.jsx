import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => { return (<div>Home</div>) }
const About = () => { return (<div>About</div>) }
const Contact = () => { return (<div>Contact</div>) }

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [])
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={ <Product products={products} />}></Route>
        </Routes>
      </BrowserRouter>
     
      <Footer />
    </div>
  )
}

export default App