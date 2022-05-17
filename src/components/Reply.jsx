import React, { useState } from "react";
import { ReactComponent as IconReply } from "../svg/icon-reply.svg";
import { getUsers } from "../services/user";
import ReplyModal from "./ReplyModal";

function Update(props) {
  const [users] = useState(getUsers);
  const [openModal, setOpenModal] = useState(false);

  const { user, id, comment, onReply } = props;
  const { currentUser } = users;

  return (
    <React.Fragment>
      {openModal && (
        <ReplyModal
          comment={comment}
          id={id}
          handleReply={onReply}
          closeModal={setOpenModal}
        />
      )}
      <div className="action action__reply comment-action-3">
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <IconReply />
          Reply
        </button>
      </div>
    </React.Fragment>
  );
}

export default Update;
