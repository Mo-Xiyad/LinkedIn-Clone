import React, { useState, useEffect } from "react";
import Postinput from "./Postinput";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";

export default function Post({ authorized, posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="post">
          <div className="poster_header">
            <img src={post.user.image} />

            <div className="header_name">
              <h4>{post.user.name}</h4>
              <p>{post.user.title}</p>
              <p>3d.</p>
            </div>
          </div>
          <h4 className="poster_blog">{post.text}</h4>
          <div className="img_container">
            <img className="img-fluid" src={post.image} />
          </div>

          <div className="poster_icon">
            <Postinput Icon={ThumbUpAltIcon} title="Like" />
            <Postinput Icon={MessageIcon} title="Comment" />
            <Postinput Icon={ShareIcon} title="Share" />
            <Postinput Icon={SendIcon} title="Send" />
          </div>
        </div>
      ))}
    </>
  );
}
