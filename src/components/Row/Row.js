import React, { useEffect, useState } from "react";

import "./Row.css";
import axios from "../../api/axios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Row({ title, fetchUrl, isLargeRow = false, link }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 4);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 4);
    let listWidth = 0;
    if (isLargeRow) {
      listWidth = (movies.length + 1) * 300 - 50;
    } else {
      listWidth = (movies.length + 1) * 150 + 100;
    }
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  return (
    <div id={link} className="row">
      <h2>{title}</h2>
      <div
        className={`${isLargeRow ? "row__leftLarge" : "row__left"}`}
        onClick={handleLeftArrow}
      >
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div
        className={`${isLargeRow ? "row__rightLarge" : "row__right"}`}
        onClick={handleRightArrow}
      >
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div
        className="row__posters"
        style={{
          marginLeft: scrollX,
        }}
      >
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
