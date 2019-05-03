import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* Render `Index` component when the url is exactly "/"  */}
      <Route path="/" exact component={Home} />
      {/* Render `About` component when the url starts with "/about"  */}
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
