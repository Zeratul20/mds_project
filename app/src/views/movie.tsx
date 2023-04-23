import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const [movie, setMovie] = useState({
    description: "",
    name: "",
    views: 0,
    director: "",
    year: 0,
  });

  const { movieId } = useParams();

  useEffect(() => {
    console.log("movieId: ", movieId)
    axios
      .get(`http://localhost:8080/api/movies/${movieId}`)
      .then((res) => {
        //console.log("res: ", res);
        if(res.data.length === 0)
          return;
        setMovie(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [movieId]);
  return (
    <div>
      <h1>
        {movie.name} ({movie.year})
      </h1>
      <h2>De: {movie.director}</h2>
      <h4>Vizualizari: {movie.views}</h4>
      {movie.description}
    </div>
  );
};
