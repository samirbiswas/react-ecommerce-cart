import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from './components/Review/Review';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Error from './components/Error/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/manage">
              <ManageInventory></ManageInventory>

            </Route>
              <Route exact path="/">
                <Shop></Shop>

            </Route>
              <Route path="/product/:productKey">
                <ProductDetail></ProductDetail>
              </Route>

            <Route path="/*">
              <Error></Error>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
