import React, { useState } from "react";
import { ReactComponent as IconEdit } from "../svg/icon-edit.svg";
import { getUsers } from "../services/user";
import UpdateModal from "./UpdateModal";

function Update(props) {
  const [users] = useState(getUsers);
  const [openModal, setOpenModal] = useState(false);

  const { user, id, comment, onUpdate } = props;

  return (
    <React.Fragment>
      {openModal && (
        <UpdateModal
          comment={comment}
          id={id}
          handleUpdate={onUpdate}
          closeModal={setOpenModal}
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
