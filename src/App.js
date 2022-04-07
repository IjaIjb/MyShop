import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mynavbar } from './component/navbar'


import { Route, Switch } from 'react-router-dom'
import { Home } from "./component/home/home";
import { About } from "./component/about/about";

function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
