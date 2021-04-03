import React from 'react';
import { Route } from 'react-router-dom';
// import Home from './views/Home';
import Products from './views/Products/Products.js';
import Product from './views/ProductDetails/ProductDetails.js';

const routes =  [
  // <Route exact path="/" component={Home} key="/" />,
  <Route exact path="/" component={Products} key="/products" />,
  <Route exact path="/product/:slug" component={Product} key="/Product" />,
];

export default routes;