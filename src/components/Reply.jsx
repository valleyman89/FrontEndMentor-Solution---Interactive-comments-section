import React, { useState } from "react";
import { ReactComponent as IconReply } from "../svg/icon-reply.svg";
import ReplyModal from "./ReplyModal";

function Update(props) {
  const [openModal, setOpenModal] = useState(false);

  const { parentId, comment, onReply } = props;
  return (
    <React.Fragment>
      {openModal && (
        <ReplyModal
          comment={comment}
          parentId={parentId}
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
