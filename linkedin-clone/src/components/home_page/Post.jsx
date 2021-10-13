import React, { useState, useEffect } from "react";
import Postinput from "./Postinput";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
export default function Post() {
  const [posts, setPosts] = useState();
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
        for (let i = 0; i < 5; i++) {
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
    <div className="post">
      <div className="poster_header">
        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />

        <div className="header_name">
          <h4>Name</h4>
          <p>Discription</p>
          <p>3d.</p>
        </div>
      </div>
      <h4 className="poster_blog">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aut
        veniam obcaecati quis odio excepturi. Nisi officiis, in, odio,
        perspiciatis sit maxime culpa voluptates recusandae aliquam veritatis
        inventore adipisci quaerat.
      </h4>
      <div className="img_container">
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1633109611134-c41b5c0bbc1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
        />
      </div>

      <div className="poster_icon">
        <Postinput Icon={ThumbUpAltIcon} title="Like" />
        <Postinput Icon={MessageIcon} title="Comment" />
        <Postinput Icon={ShareIcon} title="Share" />
        <Postinput Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}
