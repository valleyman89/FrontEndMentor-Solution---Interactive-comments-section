import React, { useState } from "react";

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
              name="commentTextArea"
              type="text"
              defaultValue={comment.content}
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
            <button
              type="submit"
              className="btn-send"
              disabled={commentText.length < 1}
            >
              update!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateModal;
