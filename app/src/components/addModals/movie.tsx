import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { set } from 'mongoose';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const isButtonDisabled = (data: any) => {
    const {name, views, director, year, description} = data;
    if (name && views && director && year && description) {
        return false;
    }
    return true;
}

export const MovieAddModal = (props:any) => {
  const {movies, setMovies, count, setCount} = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({name: "", views: 0, director: "", year: 0, description: ""});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (label:string, event: any) => {
      event.preventDefault();
      if(label === "views" || label === "year")
        setData({...data, [label]: parseInt(event.target.value)});
      else
        setData({...data, [label]: event.target.value});
  }
  
  const handleClick = (event:any) => {
    console.log(">>> data: ", data);
    setOpen(false);
      axios.post('http://localhost:8080/api/movies', data)
      .then(response => {
          console.log(response);
          setCount(count + 1);
      })
      .catch(error => {
          console.log(error);
      });
      setData({name: "", views: 0, director: "", year: 0, description: ""});
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add a movie`</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="form-group">
                <div className="name">
                    <label className='nameLabel' htmlFor="name">Name</label>
                    <input className="nameInput" placeholder='Movie Name' onChange={event => handleChange("name", event)}/>
                </div>
                <div className="views">
                    <label className='viewsLabel' htmlFor="views">Views</label>
                    <input className="viewsInput" placeholder='Views' onChange={event => handleChange("views", event)}/>
                </div>
                <div className="director">
                    <label className='directorLabel' htmlFor="director">Director</label>
                    <input className="directorInput" placeholder='Director' onChange={event => handleChange("director", event)}/>
                </div>
                <div className="year">
                    <label className='yearLabel' htmlFor="year">Year</label>
                    <input className="yearInput" placeholder='Year' onChange={event => handleChange("year", event)}/>
                </div>
                <div className='description'>
                    <label className='descriptionLabel' htmlFor="description">Description</label>
                    <textarea className="descriptionInput" placeholder='Description' onChange={event => handleChange("description", event)}/>
                </div>
                <button className="addButton" disabled={isButtonDisabled(data)} onClick={handleClick}>Add Movie</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
