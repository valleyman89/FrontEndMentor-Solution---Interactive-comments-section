import React, { useState } from "react";
import Button from "./common/Button";

function UpdateModal({ closeModal, id, parentId, comment, handleUpdate }) {
  const [commentText, setCommentText] = useState(comment.content);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    closeModal(false);
    handleUpdate(id, parentId, commentText);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="modal">
        <div className="modal-container">
          <div className="header">
            <h1>Update comment</h1>
          </div>
          <div className="body">
            <textarea
              className="input update"
              defaultValue={comment.content}
              name="commentTextArea"
              onChange={(e) => setCommentText(e.target.value)}
              type="text"
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
              buttonText="update!"
              buttonType="submit"
              textLength={commentText.length}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateModal;
