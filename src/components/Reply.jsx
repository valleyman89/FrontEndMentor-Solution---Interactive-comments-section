import React, { Component } from "react";
import { ReactComponent as IconReply } from "../svg/icon-reply.svg";
import { ReactComponent as IconEdit } from "../svg/icon-edit.svg";
import { getUsers } from "../services/user";

class Reply extends Component {
  render() {
    const { user } = this.props;
    const { currentUser } = getUsers();

    return (
      <div className="action action__reply comment-action-3">
        <button>
          {user === currentUser.username ? <IconEdit /> : <IconReply />}
          {user === currentUser.username ? " Edit" : " Reply"}
        </button>
      </div>
    );
  }
}

export default Reply;
