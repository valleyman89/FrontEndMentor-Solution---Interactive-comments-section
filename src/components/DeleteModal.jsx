import React from "react";
import Button from "./common/Button";

function DeleteModal({ closeModal, commentId, comment, handleDelete }) {
  const handleOnDelete = (e) => {
    e.preventDefault();
    handleDelete(commentId, comment);
  };
  return (
    <form onSubmit={handleOnDelete}>
      <div className="modal">
        <div className="modal-container">
          <div className="header">
            <h1>Delete comment</h1>
          </div>
          <div className="body">
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
          </div>
          <div className="footer">
            <button
              className="safe"
              type="button"
              onClick={() => {
                closeModal(false);
              }}
            >
              no, cancel
            </button>
            <Button
              buttonClass="danger"
              buttonText="yes, delete!"
              buttonType="submit"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default DeleteModal;
