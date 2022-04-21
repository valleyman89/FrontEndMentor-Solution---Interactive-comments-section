import React, { Component } from "react";
import { ReactComponent as IconReply } from "../svg/icon-reply.svg";
class Reply extends Component {
  render() {
    return (
      <div className="action reply comment-action-3">
        <button>
          <IconReply /> Reply
        </button>
      </div>
    );
  }
}

export default Reply;
