import './App.css';
import React from "react";
import MovieList from './Components/MovieList';
import HousesList from './Components/HouseList';
import Home from './Components/Home';
import {
  BrowserRouter as Router, Route, Link, Routes 
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div class='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/House">House</Link>
            </li>
            <li>
              <Link to="/MovieList">Movies</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/House" element={<HousesList />}/>
          <Route path="/MovieList" element={<MovieList />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}






