import React, { useContext } from "react";
import "../styles/about.css";
import { ThemeContext } from "../theme-context";

export default function About() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="about"
      style={{ background: theme.background, color: theme.text }}
    >
      <p>Hi! I'm Lakshya Kanungo .</p>
      <p>Thankyou so much for visiting my website .</p>
      <p>This site has been built using HTML , CSS , Javasript and ReactJS .</p>
      <p>Movie and series details are coming from OMDB API</p>
      <p>Any feedback is highly appreciated &#128519;</p>
    </div>
  );
}
