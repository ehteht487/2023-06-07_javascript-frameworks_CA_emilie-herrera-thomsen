
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import Products from './pages/ProductPage';
import Contact from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (    
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />        
      </Route>
    </Routes>  
  );
}


export default App;


