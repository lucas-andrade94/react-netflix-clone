import React from "react";

import "./HomeScreen.css";
import NavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../api/Request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Row
        link="originals"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        link="trending"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row link="top" title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        link="action"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        link="comedy"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        link="horror"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        link="romance"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        link="documentaries"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
