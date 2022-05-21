import React, { useState } from "react";
import { ReactComponent as IconReply } from "../svg/icon-reply.svg";
import ReplyModal from "./ReplyModal";

function Update(props) {
  const [openModal, setOpenModal] = useState(false);

  const { parentId, comment, originalPoster, onReply } = props;
  return (
    <React.Fragment>
      {openModal && (
        <ReplyModal
          closeModal={setOpenModal}
          comment={comment}
          handleReply={onReply}
          originalPoster={originalPoster}
          parentId={parentId}
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
