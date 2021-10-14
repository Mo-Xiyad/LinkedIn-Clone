import React from "react";
import { useState, useEffect } from "react";
import Melogo from "../profile_page/Melogo";
import Postinput from "./Postinput";
import { Button } from "react-bootstrap";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import PostModel from "./PostModel";
import PostPictureModel from "./PostPictureModel";

export default function Feed({ authorized, profile }) {
  const [show, setShow] = useState(false);

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
        let posts = data.reverse().slice(0, 150);

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
  }, [show]);

  return (
    <>
      <PostModel
        show={show}
        setShow={setShow}
        getdata={getdata}
        authorized={authorized}
      />
      ;
      <div className="feeds">
        <div className="feeding">
          <div className="posting_area">
            <Melogo authorized={authorized} />
            <div
              className="mr-2 post-input-filed"
              onClick={() => setShow(true)}
            >
              Start a post
            </div>
          </div>
          <div className="postoption">
            <Postinput
              color="#70B5F9"
              Icon={AddPhotoAlternateIcon}
              title="Photo"
            />
            <Postinput color="#7FC15E" Icon={YouTubeIcon} title="Video" />
            <Postinput color="#E7A33E" Icon={DateRangeIcon} title="Event" />
            <Postinput
              color="#FC9295"
              Icon={ArticleIcon}
              title="Write artice"
            />
          </div>
        </div>

        <div className="postfeed">
          <Post posts={posts} profile={profile} authorized={authorized} />
        </div>
      </div>
    </>
  );
}
