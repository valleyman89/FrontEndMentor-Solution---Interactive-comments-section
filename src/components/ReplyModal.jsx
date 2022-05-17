import React, { useState } from "react";

function ReplyModal({ closeModal }) {
  const [commentText, setCommentText] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    closeModal(false);
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
              onChange={(e) => setCommentText(e.target.value)}
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
}

export default ReplyModal;
