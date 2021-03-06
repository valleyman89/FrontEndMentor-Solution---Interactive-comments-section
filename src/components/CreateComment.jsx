import React, { useState } from "react";
import { getUsers } from "../services/user";
import Button from "./common/Button";
const CreateComment = ({ onReply, comments }) => {
  const { currentUser } = getUsers();

  const [commentText, setCommentText] = useState("");
  const [idCounter, setIdCounter] = useState(comments.length + 1);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIdCounter((prev) => prev + 1);

    const newComment = {
      id: idCounter,
      content: commentText,
      createdAt: "a moment ago",
      score: 1,
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
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            value={commentText}
          />
        </div>
        <div className="reply-info comment__avatar">
          <img src={currentUser.image.png} alt="profile" />
        </div>
        <div className="reply-action">
          <Button
            buttonClass="btn-send"
            buttonType="submit"
            buttonText="send"
            textLength={commentText.length}
          />
        </div>
      </div>
    </form>
  );
};

export default CreateComment;
