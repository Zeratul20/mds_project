import axios from "axios";
import React, { useState, useEffect } from "react";

export const Movie = ({movieId}:any)=>{
    const [desc, setDesc] = useState({description:"", name:"", views:0, director:"", year:0});
    useEffect(() => {
        axios
      .get(`http://localhost:8080/api/movies/${movieId}`)
      .then((res) => {
        //console.log("res: ", res);
        setDesc(res.data[0]);
      })
      .catch((err) => console.log(err));
    },[desc]);
    return <div>
        <h1>{desc.name} ({desc.year})</h1>
        <h2>De: {desc.director}</h2>
        <h4>Vizualizari: {desc.views}</h4>
        {desc.description}</div>
}