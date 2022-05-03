import React, { Component } from "react";
import { getUsers } from "../services/user";

class Info extends Component {
  render() {
    const { user, date, avatar } = this.props;
    const { currentUser } = getUsers();
    return (
      <React.Fragment>
        <div className="comment__avatar comment-info-1">
          <img src={avatar} alt="profile" />
        </div>
        <div className="comment__username comment-info-2">{user}</div>
        <div className="comment-info-3">
          {user === currentUser.username ? (
            <span className="comment__currentuser">you</span>
          ) : null}
        </div>
        <div className="comment-info-4">{date}</div>
      </React.Fragment>
    );
  }
}

export default Info;
