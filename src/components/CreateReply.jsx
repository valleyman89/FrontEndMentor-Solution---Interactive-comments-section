import React from "react";
import Input from "./common/input";
function CreateReply(props) {
  return (
    <div className="box reply">
      <div className="reply-content">
        <Input></Input>
      </div>
      <div className="reply-info">avatar</div>
      <div className="reply-action">
        <button className="btn-send btn-score">send</button>
      </div>
    </div>
  );
}

export default CreateReply;
