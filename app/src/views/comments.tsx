import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "./comments.css";
// import "../App.css";
import { CommentEditModal } from "../components/editModals/comment";

export const Comments = ({ movieId, userId }: any) => {
  const [message, setMessage] = useState("");
  const [post, setPost] = useState(false);
  const handleDelete = (event: React.SyntheticEvent, commentId:number) => {
    axios
      .delete(`http://localhost:8080/api/movies/${movieId}/comments/${commentId}`)
      .then((res) => {
        console.log(res);
        setPost(true);
      })
      .catch((err) => console.log(err));
  }
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
        setMessage("");
      })
      .catch((err) => console.log(err));
  };
  const handleAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMessage(event.target.value);
  };
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movies/${movieId}/comments`)
      .then((res) => {
        if (res.data.length === 0) return <div>No comments found</div>;
        const comms = res.data;
        comms.sort((a: any, b: any) => (a.id < b.id ? -1 : 1));
        setComments(comms);
        console.log("comments: ", comments);
        setPost(false);
      })
      .catch((err) => console.log(err));
  }, [post]);
  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment: any) => (
        <div>
          <div className="comment">
            <div className="commentUsername">{comment.username}:</div>
            <div className="commentMessage">{comment.message}</div>
            {comment.userId == userId && comment.userId != 3 && (
              <CommentEditModal
                comment={comment}
                movieId={movieId}
                setCount={setPost}
                count={post}
              />
            )}
            {comment.userId == userId && comment.userId != 3 && (
              <button className="commentDeleteButton" onClick={(e) => handleDelete(e, comment.id)}>Delete</button>
            )}
          </div>
        </div>
      ))}
      <input onChange={handleAddChange} defaultValue={message}/>
      <button onClick={handleAddClick}>Add comment</button>
    </div>
  );
};
