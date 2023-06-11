
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/ProductPage';


function App() {
  return (    
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/ProductPage' element={<Products />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>          
      </Routes>    
  );
}


export default App;


