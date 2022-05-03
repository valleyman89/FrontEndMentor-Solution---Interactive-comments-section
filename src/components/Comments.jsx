import React, { useState, useEffect, Component } from "react";
import { getComments } from "../services/data";
import { getUsers } from "../services/user";
import Delete from "./Delete";
import Info from "./Info";
import Reply from "./Reply";
import ScoreCounter from "./ScoreCounter";
import CreateReply from "./CreateReply";

function Comments(props) {
  const [users, setUsers] = useState(getUsers);
  const [comments, setComments] = useState(getComments);

  const handleReply = (comment) => {
    setComments([...comments, comment]);
  };

  const handleDelete = (id, comment) => {
    const ogComments = comments;
    const newComments = ogComments.filter((c) => c.id !== comment.id);
    setComments(newComments);
  };

  const handleDeleteReply = (id, comment) => {
    const newComments = comments.map((c) => c);
    const commentWithReplyToDelete = newComments.find(
      (c) => c.id === comment.id
    );
    commentWithReplyToDelete.replies = commentWithReplyToDelete.replies.filter(
      (r) => r.id !== id
    );
    setComments(newComments);
  };

  return (
    <React.Fragment>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <div className="box comment">
              <Info
                user={comment.user.username}
                date={comment.createdAt}
                avatar={comment.user.image.png}
              />
              <span className="comment-content">{comment.content}</span>
              <ScoreCounter score={comment.score} />
              {comment.user.username === users.currentUser.username ? (
                <Delete
                  id={comment.id}
                  comment={comment}
                  onDelete={handleDelete}
                />
              ) : null}
              <Reply user={comment.user.username} />
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
                {reply.user.username === users.currentUser.username ? (
                  <Delete
                    id={reply.id}
                    comment={comment}
                    onDelete={handleDeleteReply}
                  />
                ) : null}
                <Reply user={reply.user.username} />
              </div>
            ))}
          </React.Fragment>
        );
      })}
      <CreateReply comments={comments} onReply={handleReply} />
    </React.Fragment>
  );
}

export default Comments;
