import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Users from "./Users"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="name">React Routing</li>
          <li>
            {/* Adds the class "active" when the URL is exactly "/" */}
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            {/* `NavLink` is like `Link` + adds the class active when the URL starts with "/about" */}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        {/* Render `Index` component when the url is exactly "/"  */}
        <Route path="/" exact component={Home} />
        {/* Render `About` component when the url starts with "/about"  */}
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route render={props => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
