import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    let unsubscribe;
    console.log("fired!");
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, []);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      comments: comment,
      username: user.displayName,
    });

    setComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="RafehQazi" src="" />

        <h3>{username}</h3>
      </div>
      {/* header -> avatar + username */}

      <img className="post__image" src={imageUrl} alt="" />
      {/* image */}

      <h4 className="post__text">
        <strong>{username}</strong>: {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => {
          return (
            <p>
              <strong>{comment.username}</strong> {comment.comments}
            </p>
          );
        })}
      </div>
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            post
          </button>
        </form>
      )}
      {/* username + caption */}
    </div>
  );
}

export default Post;
