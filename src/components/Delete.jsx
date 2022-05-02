import React, { useState } from "react";
import { ReactComponent as IconDelete } from "../svg/icon-delete.svg";
import Modal from "./Modal";

function Delete(props) {
  const { id, comment, onDelete } = props;
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      {openModal && (
        <Modal
          handleDelete={onDelete}
          commentId={id}
          comment={comment}
          closeModal={setOpenModal}
        />
      )}
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="action action__delete comment-action-2"
      >
        <IconDelete /> Delete
      </button>
    </React.Fragment>
  );
}

export default Delete;
