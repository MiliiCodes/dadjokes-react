import React, { useState } from 'react';
import './style.css';

export const Joke = ({
  userAvatar,
  userName,
  text,
  likes,
  dislikes,
  onLike,
  onDislike,
}) => {
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => {
            onLike();
          }}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => {
            onDislike();
          }}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikes}
        </span>
      </div>
    </div>
  );
};
