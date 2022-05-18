import React, { useState } from "react";
import { getUsers } from "../services/user";

const ReplyModal = ({ closeModal, parentId, comment, handleReply }) => {
  const { currentUser } = getUsers();
  const [replyText, setReplyText] = useState(false);

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
      score: 0,
      replyingTo: comment.user.username,
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
              type="text"
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
            <button type="submit" className="danger">
              reply!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReplyModal;