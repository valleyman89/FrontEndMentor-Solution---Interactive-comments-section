import React, { useState } from "react";
import { getComments } from "../services/data";
import { getUsers } from "../services/user";
import Delete from "./Delete";
import Info from "./Info";
import Update from "./Update";
import ScoreCounter from "./ScoreCounter";
import CreateComment from "./CreateComment";
import Reply from "./Reply";

function Comments() {
  const [users] = useState(getUsers);
  const [comments, setComments] = useState(getComments);

  //// COMMENTS
  // comments: create
  const handleCreateComment = (comment) => {
    setComments([...comments, comment]);
  };
  // comments: update
  const handleUpdateComment = (id, parentId, content) => {
    const updatedComments = comments.map((c) => {
      if (c.id === id) {
        return { ...c, content };
      } else {
        return c;
      }
    });
    setComments(updatedComments);
  };
  // comments: delete
  const handleDeleteComment = (id, comment) => {
    const ogComments = comments;
    const newComments = ogComments.filter((c) => c.id !== comment.id);
    setComments(newComments);
  };

  //// REPLIES
  // replies: create
  const handleCreateReply = (parentId, comment) => {
    const newComments = comments.map((c) => c);
    const commentWithReplyToCreate = newComments.find((c) => c.id === parentId);
    commentWithReplyToCreate.replies.push(comment);
    setComments(newComments);
  };
  // replies: update
  const handleUpdateReply = (id, parentId, comment) => {
    const updatedComments = comments.map((c) => c);
    const commentWithReplyToUpdate = updatedComments.find(
      (c) => c.id === parentId
    );
    commentWithReplyToUpdate.replies = commentWithReplyToUpdate.replies.map(
      (r) => {
        if (r.id === id) {
          return { ...r, content: comment };
        } else {
          return r;
        }
      }
    );
    setComments(updatedComments);
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
                  />
                </React.Fragment>
              ) : (
                <Reply
                  parentId={comment.id}
                  comment={comment}
                  onReply={handleCreateReply}
                  originalPoster={comment.user.username}
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
                <span className="comment-content">
                  <span className="comment-original-poster">
                    @{reply.replyingTo}
                  </span>{" "}
                  {reply.content}
                </span>
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
                      comment={reply}
                      parentId={comment.id}
                      onUpdate={handleUpdateReply}
                    />
                  </React.Fragment>
                ) : (
                  <Reply
                    parentId={comment.id}
                    comment={comment}
                    onReply={handleCreateReply}
                    originalPoster={reply.user.username}
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
