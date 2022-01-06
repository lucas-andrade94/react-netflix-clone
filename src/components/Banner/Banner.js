import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

import axios from "../../api/axios";
import requests from "../../api/Request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function dateLaunch(date) {
    let firstDate = new Date(date);
    return firstDate.getFullYear();
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundColor: "linear-gradient(to right, #111 30%, transparent 70%)",
      }}
    >
      <div className="banner__shadow-left">
        <div className="banner__shadow-bottom">
          <div className="banner__contents">
            <h2 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h2>
            <div className="banner__information">
              <Rating
                name="read-only"
                value={movie?.vote_average / 2}
                precision={0.1}
                readOnly
              />
              <p>{dateLaunch(movie?.first_air_date)}</p>
            </div>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">+ My List</button>
            </div>
            <h3 className="banner__description">
              {truncate(movie?.overview, 200)}
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
