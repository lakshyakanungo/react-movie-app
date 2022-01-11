import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { ThemeContext } from "../theme-context";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="home"
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="message">
        <p>Welcome to MovieDekho!!</p>
        <p>Find every detail about the show you want to watch</p>
        <p>
          Browse for your favourite movies , series , TV shows and remember to
          watch them later!!
        </p>
        <p>Now you can also change theme &#59;&#41;</p>
        <p className="dialogue">
          Kyonki... Picture abhi baaki h mere dost &#128540;
        </p>
      </div>
      <div className="links">
        <Link to="/about" className="link">
          Go to about page
        </Link>
        <br />
        <Link to="/" className="link">
          Go to movie-list page
        </Link>
      </div>
    </div>
  );
}
