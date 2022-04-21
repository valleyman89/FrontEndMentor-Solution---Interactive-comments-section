import React, { Component } from "react";
import { getComments } from "../services/data";
import Delete from "./Delete";
import Info from "./Info";
import Reply from "./Reply";
import ScoreCounter from "./ScoreCounter";

class Comment extends Component {
  render() {
    const data = getComments();

    return (
      <React.Fragment>
        {data.map((comment) => {
          return (
            <div key={comment.id} className="comment grid">
              <Info
                user={comment.user.username}
                date={comment.createdAt}
                avatar={comment.user.image.png}
              />

              <span className="grid-content">{comment.content}</span>
              <ScoreCounter score={comment.score} />
              <Delete id={comment.id} />
              <Reply />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Comment;
