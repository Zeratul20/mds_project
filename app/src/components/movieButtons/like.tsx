import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { set } from 'mongoose';
import axios from 'axios';
// import cn from "classnames";

export const LikeButton = (props: any) => {
    const {movie, count, setCount, userId} = props;
    console.log(">>>userId: ", userId)
    const {id: movieId} = movie;
    const {views} = movie;
    const handleLikeButtonPressed = (event: any, mov: any) => {
        event.preventDefault();
        axios
            .put(`http://localhost:8080/api/movies/${movieId}`, {views: views + 1})
            .then((response) => {
                console.log(response);
                setCount(count + 1);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <button disabled={userId === 3} onClick={(event) => handleLikeButtonPressed(event, movie)}>
                ❤️
            </button>
        </div>
    );
}