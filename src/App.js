import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Route, Switch } from "react-router-dom";

function App() {
  return (
    //BEM
    <Route>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <hl>Hello Betty the darkness serves you better!</hl>
          <Header/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Route>
  );
}

export default App;
