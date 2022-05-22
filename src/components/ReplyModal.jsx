import React, { useState } from "react";
import { getUsers } from "../services/user";
import Button from "./common/Button";

const ReplyModal = ({
  closeModal,
  parentId,
  comment,
  originalPoster,
  handleReply,
}) => {
  const { currentUser } = getUsers();
  const [replyText, setReplyText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let generateNewId = comment.replies.length + 1;
    const commentArray = comment.replies.slice(-1).pop();
    if (commentArray) {
      generateNewId = commentArray.id + 1;
    }
    const newReply = {
      id: generateNewId,
      content: replyText,
      createdAt: "a moment ago",
      score: 1,
      replyingTo: originalPoster,
      user: {
        image: {
          png: "./images/avatars/image-" + currentUser.username + ".png",
          webp: "./images/avatars/image-" + currentUser.username + ".webp",
        },
        username: currentUser.username,
      },
    };
    closeModal(false);
    handleReply(parentId, newReply);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="modal">
        <div className="modal-container">
          <div className="header">
            <h1>Reply to comment</h1>
          </div>
          <div className="body">
            <textarea
              className="input update"
              name="commentTextArea"
              onChange={(e) => setReplyText(e.target.value)}
            />
          </div>
          <div className="footer">
            <button
              type="button"
              className="safe"
              onClick={() => {
                closeModal(false);
              }}
            >
              discard
            </button>
            <Button
              buttonClass="btn-send"
              buttonText="reply!"
              buttonType="submit"
              textLength={replyText.length}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReplyModal;
