import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPAge from './pages/shop/shop'
import Header from './components/header/header'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPAge} />
      </Switch>
    </div>
  );
}

export default App;
