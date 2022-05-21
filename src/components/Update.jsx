import React, { useState } from "react";
import { ReactComponent as IconEdit } from "../svg/icon-edit.svg";
import UpdateModal from "./UpdateModal";

function Update(props) {
  const [openModal, setOpenModal] = useState(false);

  const { id, parentId, comment, onUpdate } = props;

  return (
    <React.Fragment>
      {openModal && (
        <UpdateModal
          closeModal={setOpenModal}
          comment={comment}
          handleUpdate={onUpdate}
          id={id}
          parentId={parentId}
        />
      )}
      <div className="action action__reply comment-action-3">
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <IconEdit /> Edit
        </button>
      </div>
    </React.Fragment>
  );
}

export default Update;
