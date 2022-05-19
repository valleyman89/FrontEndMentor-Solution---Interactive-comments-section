import React, { useState } from "react";
import { getComments } from "../services/data";
import { getUsers } from "../services/user";
import Delete from "./Delete";
import Info from "./Info";
import Update from "./Update";
import ScoreCounter from "./ScoreCounter";
import CreateComment from "./CreateComment";
import Reply from "./Reply";

function Comments(props) {
  const [users] = useState(getUsers);
  const [comments, setComments] = useState(getComments);

  //// COMMENTS
  // comments: create
  const handleCreateComment = (comment) => {
    setComments([...comments, comment]);
    console.log("handleCreateComment called");
  };
  // comments: update
  const handleUpdateComment = (id, content) => {
    const updatedComments = comments.map((c) => {
      if (c.id === id) {
        return { ...c, content };
      } else {
        return c;
      }
    });
    setComments(updatedComments);
    console.log("handleUpdateComment called");
  };
  // comments: delete
  const handleDeleteComment = (id, comment) => {
    const ogComments = comments;
    const newComments = ogComments.filter((c) => c.id !== comment.id);
    setComments(newComments);
    console.log("handleDeleteComment called");
  };

  //// REPLIES
  // replies: create
  const handleCreateReply = (parentId, comment) => {
    console.log("handleCreateReply called");

    const newComments = comments.map((c) => c);
    const commentWithReplyToCreate = newComments.find((c) => c.id === parentId);
    commentWithReplyToCreate.replies.push(comment);
    setComments(newComments);
  };
  // replies: update
  const handleUpdateReply = (parentId, comment) => {
    console.log("handleUpdateReply called");
    console.log("parent id:", parentId);
    console.log("new reply: ", comment);
  };
  // replies: delete
  const handleDeleteReply = (id, comment) => {
    const newComments = comments.map((c) => c);
    const commentWithReplyToDelete = newComments.find(
      (c) => c.id === comment.id
    );
    commentWithReplyToDelete.replies = commentWithReplyToDelete.replies.filter(
      (r) => r.id !== id
    );
    setComments(newComments);
    console.log("handleDeleteReply called");
  };

  return (
    <React.Fragment>
      {/* COMMENTS */}
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
                <React.Fragment>
                  <Delete
                    id={comment.id}
                    comment={comment}
                    onDelete={handleDeleteComment}
                  />
                  <Update
                    comment={comment}
                    id={comment.id}
                    onUpdate={handleUpdateComment}
                    user={comment.user.username}
                  />
                </React.Fragment>
              ) : (
                <Reply
                  parentId={comment.id}
                  comment={comment}
                  onReply={handleCreateReply}
                />
              )}
            </div>
            {/* REPLIES */}
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
                  <React.Fragment>
                    <Delete
                      id={reply.id}
                      comment={comment}
                      onDelete={handleDeleteReply}
                    />
                    <Update
                      id={reply.id}
                      comment={comment}
                      onUpdate={handleUpdateReply}
                      user={reply.user.username}
                    />
                  </React.Fragment>
                ) : (
                  <Reply
                    parentId={comment.id}
                    comment={comment}
                    onCommentReply={handleCreateReply}
                  />
                )}
              </div>
            ))}
          </React.Fragment>
        );
      })}
      <CreateComment comments={comments} onReply={handleCreateComment} />
    </React.Fragment>
  );
}

export default Comments;
