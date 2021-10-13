import React, { useState, useEffect } from "react";
import Postinput from "./Postinput";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";

export default function Post({ authorized }) {
  const [posts, setPosts] = useState([]);
  let getdata = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/ ",
        {
          methode: "Get",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY1ZWZjMmEwMjlmNTAwMTU3YzYzNzAiLCJpYXQiOjE2MzQwNzA0NjYsImV4cCI6MTYzNTI4MDA2Nn0.6TmpZr9l1pAa5KnLrVIjmecOf-U4gH_MYwf39lJOGWM",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        let posts = [];

        for (let i = 0; i < 150; i++) {
          posts.push(data[i]);
        }

        setPosts(posts);
        console.log("POSTS========");
        console.log(posts);
      } else {
        console.log("rr after the fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
