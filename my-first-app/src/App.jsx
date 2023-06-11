
import { Routes, Route, } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import Product from './pages/ProductPage'
import Contact from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';
import CartProvider from './utils/cartFunctionality';


function App() {
  return (   
    <CartProvider>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<PageNotFound />} />        
          </Route>
      </Routes>  
    </CartProvider>
  );
}


export default App;


