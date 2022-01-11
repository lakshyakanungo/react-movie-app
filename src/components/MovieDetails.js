import React, { useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/movie-details.css";
import { ThemeContext } from "../theme-context";

// const API_BASE_URL = "http://www.omdbapi.com/?apikey=d8a9fb9c&";

export default function MovieDetails() {
  const [isLoading, setisLoading] = useState(false);
  const [MovieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setisLoading(true);
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=d8a9fb9c&i=${id}`
      );
      setMovieDetails(res.data);
      setisLoading(false);
    };
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div
        className="container3"
        style={{ background: theme.background, color: theme.text }}
      >
        Loading...
      </div>
    );
  } else if (MovieDetails.Response === "False") {
    return (
      <div
        className="container3"
        style={{ background: theme.background, color: theme.text }}
      >
        id not found!!
      </div>
    );
  } else {
    return (
      <div
        className="container2"
        style={{ background: theme.background, color: theme.text }}
      >
        <div className="movie-details">
          <div className="image">
            <img src={MovieDetails.Poster} alt={MovieDetails.Title} />
          </div>
          <div className="textual">
            <p className="title">{MovieDetails.Title}</p>
            <div className="runtime">
              <span>Runtime : </span>
              <span>{MovieDetails.Runtime}</span>
            </div>
            <div className="imdbRating">
              <span>Imdb Rating : </span>
              <span>{MovieDetails.imdbRating}/10</span>
            </div>
            <div className="releaseDate">
              <span>Release Date : </span>
              <span>{MovieDetails.Released}</span>
            </div>
            <div className="cast">
              <span>Cast : </span>
              <span>{MovieDetails.Actors}</span>
            </div>
            <div className="director">
              <span>Director : </span>
              <span>{MovieDetails.Director}</span>
            </div>
            <div className="genre">
              <span>Genre : </span>
              <span>{MovieDetails.Genre}</span>
            </div>
            <div className="type">
              <span>Type : </span>
              <span>{MovieDetails.Type}</span>
            </div>
            <div className="seasons">
              <span>No. of seasons : </span>
              <span>{MovieDetails.totalSeasons}</span>
            </div>
            <div className="awards">
              <span>Awards : </span>
              <span>{MovieDetails.Awards}</span>
            </div>
            <div className="writer">
              <span>Writer : </span>
              <span>{MovieDetails.Writer}</span>
            </div>
          </div>
        </div>
        <div className="plot">
          <h3>Plot : </h3>
          <p>{MovieDetails.Plot}</p>
        </div>
      </div>
    );
  }
}
