import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

export const Comments = ({ movieId, userId }: any) => {
  const [message, setMessage] = useState("");
  const [post, setPost] = useState(false);
  const handleAddClick = (event: React.SyntheticEvent) => {
    axios
      .post(`http://localhost:8080/api/movies/comments`, {
        message,
        userId,
        movieId,
      })
      .then((res) => {
        console.log(res);
        setPost(true);
      })
      .catch((err) => console.log(err));
  };
  const handleAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("comments: ", comments)
    axios
      .get(`http://localhost:8080/api/movies/${movieId}/comments`)
      .then((res) => {
        if (res.data.length === 0) return <div>No comments found</div>;
        setComments(res.data);
        setPost(false);
      })
      .catch((err) => console.log(err));
  }, [post]);
  return (
    <div className="Comments">
      <h2>Comments</h2>
      {comments.map((comment: any) => (
        <div className = "Comment">
          <h3>
            {comment.userId}: {/*Fa plz nume daca poti*/}
          </h3>
          <br/>
          <p>
            {comment.message}
          </p>
        </div>
      ))}
      <input onChange={handleAddChange}></input>
      <button onClick={handleAddClick}>Add comment</button>
    </div>
  );
};
