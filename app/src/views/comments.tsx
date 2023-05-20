import axios from "axios";
import { useEffect, useState } from "react";

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
    console.log("comments: ", comments);
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
    <div>
      <h1>Comments</h1>
      {comments.map((comment: any) => (
        <div>
          <p>
            {/* {comment.message} | {getUsername(comment.userId)} */}
            {comment.message} | {comment.username}
          </p>
        </div>
      ))}
      <input onChange={handleAddChange}></input>
      <button onClick={handleAddClick}>Add comment</button>
    </div>
  );
};
