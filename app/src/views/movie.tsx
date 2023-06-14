import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Comments } from "./comments";


export const Movie = () => {
  const [movie, setMovie] = useState({
    description: "",
    name: "",
    views: 0,
    director: "",
    year: 0,
  });

  const navigate = useNavigate();

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
    <div>
      <button style={{border: "none", color: "white", padding: "15px 32px", display: "inline-block", backgroundColor: "#008CBA", fontSize: "font-size: 16px;", fontFamily: "inherit", marginTop: "10px", cursor: "pointer"}} onClick={() => navigate("/movies")}>Return to the Movies page</button>
      <h1>
        {movie.name} ({movie.year})
      </h1>
      <h2>De: {movie.director}</h2>
      <h4>Likes: {movie.views}</h4>
      {movie.description}
      <Comments movieId={movieId} userId={userId}/>
    </div>
  );
};
