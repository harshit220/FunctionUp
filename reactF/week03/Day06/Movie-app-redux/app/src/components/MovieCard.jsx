import React from "react";

const MovieCard = (props) => {
  const {Poster,Title, Type, Year, imdbID}=props;
  return <div>
    <img src={Poster} alt={Title} />
    <h3>{Title}</h3>
    <p>{Type}</p>
    <p>{Year}</p>
  </div>;
};

export default MovieCard;


// Poster: "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg";
// Title: "Last Action Hero";
// Type: "movie";
// Year: "1993";
// imdbID: "tt0107362";
