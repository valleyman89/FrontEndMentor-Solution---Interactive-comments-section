import React from "react";

function Modal({ closeModal, commentId, comment, handleDelete }) {
  //const { handleDelete, id } = props;

  return (
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
            onClick={() => {
              closeModal(false);
            }}
          >
            no, cancel
          </button>
          <button
            onClick={() => {
              handleDelete(commentId, comment);
            }}
            className="danger"
          >
            yes, delete!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
