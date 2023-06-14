import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { set } from "mongoose";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const isButtonDisabled = (data: any, movie:any) => {
  const { views, description } = data;
  if (views === movie.views && description === movie.description) {
    return true;
  }
  return false;
};

export const MovieEditModal = (props: any) => {
  const { movies, setMovies, movie, count, setCount } = props;
  const {
    description: movieDescription,
    id: movieId,
  } = movie;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ description: movieDescription });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (label: string, event: any) => {
    event.preventDefault();
    setData({ ...data, [label]: event.target.value });
  };

  const handleClick = (event: any) => {
    console.log(">>> data: ", data);
    setOpen(false);
    axios
      .put(`http://localhost:8080/api/movies/${movieId}`, data)
      .then((response) => {
        console.log(response);
        setCount(count + 1);
      })
      .catch((error) => {
        console.log(error);
      });
    setData({ description: "" });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-group">
              <div className="description">
                <label className="descriptionLabel" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="descriptionInput"
                  defaultValue={movieDescription}
                  onChange={(event) => handleChange("description", event)}
                />
              </div>
              <button className="editButton" disabled={isButtonDisabled(data, movie)} onClick={handleClick}>
                Edit Movie
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
