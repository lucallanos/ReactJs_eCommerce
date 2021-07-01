import React, { Component } from "react";
import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
// VIEWS
import Home from "./views/Home/Home";
import Info from "./views/Info/Info";
import Contact from "./views/Contact/Contact";
import ItemDetailView from "./views/ItemDetailView/ItemDetailView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category/info" component={Info}></Route>
            <Route path="/category/contact" component={Contact}></Route>
            <Route path="/item/:id" component={ItemDetailView}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
