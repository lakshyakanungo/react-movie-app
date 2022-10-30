import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ search, toggleTheme }) {
  return (
    <div className="navbar">
      <div className="mainlogo">
        <div className="logo">moviedekho</div>
        <div className="container"></div>
      </div>
      <div className="links">
        <div className="two-buttons">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </div>
        <div className="one-button">
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            Switch Theme
          </button>
        </div>
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="search movies"
        id="searchitem"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            search(e.target.value);
          }
          //   console.log(search);
        }}
      ></input>
    </div>
  );
}
