import React, { useContext } from "react";
import "../styles/moviecard.css";
import { ThemeContext } from "../theme-context";

export default function Moviecard({ movie }) {
  const widthh = movie.Poster.clientWidth;
  const theme = useContext(ThemeContext);

  return (
    <div
      className="movie-card"
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="image">
        <img src={movie.Poster} alt={movie.Title}></img>
        <div className="text-items" style={{ width: { widthh } }}>
          <div className="movie_title">{movie.Title}</div>
          <div className="movie_year">{movie.Year}</div>
        </div>
      </div>
    </div>
  );
}
