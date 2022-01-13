import React, { useContext } from "react";
import "../styles/about.css";
import { ThemeContext } from "../theme-context";

export default function About() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="box"
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="message">
        <div className="myinfo">Website info :</div>
        <p>Welcome to MovieDekho!!</p>
        <p>Find every detail about the shows you want to watch</p>
        <p>
          Browse for your favourite movies , series , TV shows and remember to
          watch them later!!
        </p>
        <p>Now you can also change theme &#59;&#41;</p>
        <p className="dialogue">
          Kyonki... Picture abhi baaki h mere dost &#128540;
        </p>
      </div>

      <div className="about">
        <div className="myinfo">Developer info :</div>
        <p>Hi! I'm Lakshya Kanungo .</p>
        <p>Thankyou so much for visiting my website .</p>
        <p>
          This site has been built using HTML , CSS , Javasript and ReactJS .
        </p>
        <p>Movie and series details are coming from OMDB API</p>
        <p>Any feedback is highly appreciated &#128519;</p>
      </div>
    </div>
  );
}
