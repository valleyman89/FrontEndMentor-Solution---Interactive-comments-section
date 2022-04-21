import React, { Component } from "react";

class Info extends Component {
  render() {
    const { user, date, avatar } = this.props;

    return (
      <React.Fragment>
        <div className="comment__avatar comment-info-1">
          <img src={avatar} alt="profile" />
        </div>
        <div className="comment__username comment-info-2">{user}</div>
        <div className="comment-info-3">{date}</div>
      </React.Fragment>
    );
  }
}

export default Info;
