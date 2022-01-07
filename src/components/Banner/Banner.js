import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

import axios from "../../api/axios";
import requests from "../../api/Request";
import "./Banner.css";

function Banner() {
  const TMDB_API_KEY = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState([]);
  const [season, setSeason] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );

      while (randomNumber === -1) {
        randomNumber = Math.floor(
          Math.random() * request.data.results.length - 1
        );
      }

      setMovie(request.data.results[randomNumber]);
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchSeason(id) {
      const request = await axios.get(
        `/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`
      );

      setSeason(request.data.number_of_seasons);
      return request;
    }

    fetchSeason(movie.id);
  }, [movie]);

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
              <p>{season > 1 ? `${season} seasons` : `${season} season`}</p>
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
