import React, { useState, useEffect } from "react";
import { getUsers } from "../services/user";

const CreateReply = (props) => {
  const { onReply, comments } = props;
  const { currentUser } = getUsers();

  const [commentText, setCommentText] = useState("");
  const incrementId = comments.length + 1;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: incrementId,
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
          />
        </div>
        <div className="reply-info comment__avatar">
          <img src={currentUser.image.png} alt="profile" />
        </div>
        <div className="reply-action">
          <button className="btn-send btn-score">send</button>
        </div>
      </div>
    </form>
  );
};

export default CreateReply;
