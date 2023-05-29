import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { FetchMovies } from "../redux/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Home = () => {
  //const [data, setData] = useState([]);
  const movies = useSelector((state) => state.movies);
console.log(movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMovies());
  }, []);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {movies?.map((movie)=>{
       return <MovieCard key={movie.imdbID} {...movie}/>
    })}
      </div>
    </div>
  );
};

export default Home;
