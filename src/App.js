import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router-dom";


const CapsPage = () => (
  <div>
    <h1>Caps PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route path="/caps" component={CapsPage} />
      </Switch>
    </div>
  );
}

export default App;
