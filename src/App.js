import "./App.css";
import { Navbar, MovieList, Home } from "./components";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import About from "./pages/About.js";
import MovieDetails from "./components/MovieDetails";
import { ThemeContext, themes } from "./theme-context";

// const API_KEY = "d8a9fb9c";
const API_BASE_URL = "https://www.omdbapi.com/?apikey=d8a9fb9c&";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [movies, setmovies] = useState(null);
  const [onStartup, setonStartup] = useState(true);

  const navigate = useNavigate();

  const search = async function (searchitem) {
    setisLoading(true);
    navigate("/movie-list");
    const res = await axios.get(API_BASE_URL + "s=" + searchitem);
    setmovies(res.data.Search);
    // console.log(res.data.Search);
    setisLoading(false);
    setonStartup(false);
    navigate("/movie-list");
  };

  //theme
  const [theme, setTheme] = useState(themes.dark);
  function toggleTheme() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <ThemeContext.Provider value={theme}>
        <Navbar search={search} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/movie-list"
            element={
              <MovieList
                isLoading={isLoading}
                movies={movies}
                onStartup={onStartup}
              />
            }
          />
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
