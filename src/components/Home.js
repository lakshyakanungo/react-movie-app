import React, { useContext } from "react";
import "../styles/home.css";
import simg1 from "../posters/small/john-wick-movie-poster-wallpaper-preview.jpg";
import simg2 from "../posters/small/women-actress-brunette-short-hair-wallpaper-preview.jpg";
import simg3 from "../posters/small/fifty-shades.jpg";
import simg4 from "../posters/small/movies-007-skyfall-daniel-craig-wallpaper-preview.jpg";
import limg1 from "../posters/large/joker.jpg";
import limg2 from "../posters/large/lion king.jpg";
import limg3 from "../posters/large/lord of rings.jpg";
import limg4 from "../posters/large/star-wars.jpg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme-context";

// const API_BASE_URL = "http://www.omdbapi.com/?apikey=d8a9fb9c&i=";

//through this component we will return movie posters on startup
export default function Home() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="images"
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="large">
        <div className="l1">
          {/* tt7286456 */}
          <Link to="/movie/tt7286456">
            <img src={limg1} alt="joker" />
          </Link>
        </div>
        <div className="l2">
          {/* tt6105098 */}
          <Link to="/movie/tt6105098">
            <img src={limg2} alt="lion king" />
          </Link>
        </div>
        <div className="l3">
          {/* tt0167260 */}
          <Link to="/movie/tt0167260">
            <img src={limg3} alt="lord of the rings" />
          </Link>
        </div>
        <div className="l4">
          {/* tt2527338 */}
          <Link to="/movie/tt2527338">
            <img src={limg4} alt="star-wars" />
          </Link>
        </div>
      </div>
      <div className="small">
        <div className="s1">
          {/* tt2911666 */}
          <Link to="/movie/tt2911666">
            <img src={simg1} alt="john wick" />
          </Link>
        </div>
        <div className="s2">
          {/* tt0110912 */}
          <Link to="/movie/tt0110912">
            <img src={simg2} alt="silver pistol" />
          </Link>
        </div>
        <div className="s3">
          {/* tt2322441 */}
          <Link to="/movie/tt2322441">
            <img src={simg3} alt="fifty shades" />
          </Link>
        </div>
        <div className="s4">
          {/* tt1074638 */}
          <Link to="/movie/tt1074638">
            <img src={simg4} alt="skyfall" />
          </Link>
        </div>
      </div>
    </div>
  );
}
