// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


