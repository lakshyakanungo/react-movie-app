import React, { useContext } from "react";
import "../styles/movielist.css";
import { Moviecard } from ".";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme-context";

export default function MovieList({ movies, isLoading }) {
  const theme = useContext(ThemeContext);
  if (isLoading) {
    return (
      <div
        className="movielist2"
        style={{ background: theme.background, color: theme.text }}
      >
        Loading probable movielist
      </div>
    );
  } else if (!movies) {
    return (
      <div
        className="movielist3"
        style={{ background: theme.background, color: theme.text }}
      >
        OOPS! Movie not found . Check for any spelling error
      </div>
    );
  } else {
    return (
      <div
        className="movielist4"
        style={{ background: theme.background, color: theme.text }}
      >
        {/* <p>MovieList component is being displayed</p> */}
        {movies.map((i) => {
          return (
            // <Link to="movie/:i.imdbID">
            <div>
              <Link to={"/movie/" + i.imdbID}>
                <Moviecard movie={i} key={i.imdbID} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
