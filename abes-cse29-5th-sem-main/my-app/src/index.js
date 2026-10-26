import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './HeaderComponent';
import ProductComponent from './ProductComponent';
import FooterComponent from './FooterComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
let products = [];
const getProductsData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  products = data.products;
}
getProductsData();
console.log(products);

  root.render(
    <React.StrictMode>
      <HeaderComponent/>
      <ProductComponent/>
      <FooterComponent/>
    </React.StrictMode>
  );

