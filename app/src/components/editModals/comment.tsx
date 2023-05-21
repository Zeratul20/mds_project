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

const isButtonDisabled = (data: any, comment: any) => {
  const { message } = data;
  if (message === comment.message) return true;
  return false;
};

export const CommentEditModal = (props: any) => {
    const {comment, movieId, setCount, count} = props;
  const { id: commentId, message: commentMessage } = comment;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    message: commentMessage,
  });
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
      .put(`http://localhost:8080/api/movies/${movieId}/comments/${commentId}`, data)
      .then((response) => {
        console.log(response);
        setCount(count + 1);
      })
      .catch((error) => {
        console.log(error);
      });
    setData({ message: "" });
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
            Edit comment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-group">
              <div className="message">
                <label className="messageLabel" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="messageInput"
                  defaultValue={commentMessage}
                  onChange={(event) => handleChange("message", event)}
                />
              </div>
              <button
                className="editButton"
                disabled={isButtonDisabled(data, comment)}
                onClick={handleClick}
              >
                Edit Movie
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
