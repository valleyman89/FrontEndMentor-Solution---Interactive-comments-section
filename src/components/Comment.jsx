import React, { Component } from "react";
import { getComments } from "../services/data";
import CreateReply from "./CreateReply";
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
            <React.Fragment>
              <div key={comment.id} className="box comment">
                <Info
                  user={comment.user.username}
                  date={comment.createdAt}
                  avatar={comment.user.image.png}
                />
                <span className="comment-content">{comment.content}</span>
                <ScoreCounter score={comment.score} />
                <Delete id={comment.id} />
                <Reply />
              </div>
              {comment.replies.map((reply) => (
                <div key={reply.id} className="box comment comment--reply">
                  <Info
                    user={reply.user.username}
                    date={reply.createdAt}
                    avatar={reply.user.image.png}
                  />
                  <span className="comment-content">{reply.content}</span>
                  <ScoreCounter score={reply.score} />
                  <Delete />
                  <Reply />
                </div>
              ))}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Comment;
