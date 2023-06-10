import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "./comments";
import "../App.css";

export const Movie = () => {
  const [movie, setMovie] = useState({
    description: "",
    name: "",
    views: 0,
    director: "",
    year: 0,
  });

  const { movieId, userId } = useParams();

  useEffect(() => {
    console.log("movieId: ", movieId)
    axios
      .get(`http://localhost:8080/api/movies/${movieId}`)
      .then((res) => {
        //console.log("res: ", res);
        if(res.data.length === 0)
          return <div>No movie found</div>;
        setMovie(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [movieId]);
  return (
    <div className = "Movie">
      <h1>
        {movie.name} ({movie.year})
      </h1>
      <h2>De: {movie.director}</h2>
      <br/>
      <h4>Vizualizari: {movie.views}</h4>
      <br/>
      <div className = "MovieText">{movie.description}</div>
      <Comments movieId={movieId} userId={userId}/>
    </div>
  );
};
