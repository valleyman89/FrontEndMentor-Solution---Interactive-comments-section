import React, { useState } from "react";
import { getUsers } from "../services/user";

const CreateComment = (props) => {
  const { onReply, comments } = props;
  const { currentUser } = getUsers();

  const [commentText, setCommentText] = useState("");
  const [idCounter, setIdCounter] = useState(0);

  const handleOnSubmit = (e) => {
    setIdCounter(idCounter + comments.length + 1);

    e.preventDefault();

    const newComment = {
      id: idCounter,
      content: commentText,
      createdAt: "a moment ago",
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-" + currentUser.username + ".png",
          webp: "./images/avatars/image-" + currentUser.username + ".webp",
        },
        username: currentUser.username,
      },
      replies: [],
    };

    onReply(newComment);
    setCommentText("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="box reply">
        <div className="reply-content">
          <textarea
            className="input"
            name="commentTextArea"
            type="text"
            placeholder="Add a comment..."
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
          />
        </div>
        <div className="reply-info comment__avatar">
          <img src={currentUser.image.png} alt="profile" />
        </div>
        <div className="reply-action">
          <button type="submit" className="btn-send btn-score">
            send
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateComment;