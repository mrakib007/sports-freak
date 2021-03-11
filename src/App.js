import Teams from "./Components/Teams/Teams";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Teams></Teams>
        </Route>
        <Route path = "/team/:id">
        <TeamDetails></TeamDetails>
        </Route>
      </Switch>
     
      </Router>
    </div>
  );
}

export default App;
