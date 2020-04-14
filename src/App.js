import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.component.styles.scss";
import { Switch, Route } from "react-router-dom";

const Hatspage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
