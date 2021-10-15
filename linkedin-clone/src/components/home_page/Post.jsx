import React, { useState, useEffect } from "react";
import Postinput from "./Postinput";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import MessageIcon from "@mui/icons-material/Message";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import EditpostModel from "./EditpostModel";
import DeletePostModel from "./DeletePostModel";
// import PostPictureModel from "./PostPictureModel";
import { Link } from "react-router-dom";

export default function Post({ profile, authorized, posts }) {
  const [show, setShow] = useState(false);

  const [showPostPicture, setShowPostPicture] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const [postId, setPostId] = useState();
  useEffect(() => {
    console.log(posts);
  }, []);
  return (
    <>
      {/* <PostPictureModel
        className="fddfdfdfdf"
        showPostPicture={showPostPicture}
        setShowPostPicture={setShowPostPicture}
        authorized={authorized}
        postId={postId}
      /> */}
      <EditpostModel
        show={show}
        setShow={setShow}
        authorized={authorized}
        postId={postId}
      />
      <DeletePostModel
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        postId={postId}
      />

      {posts.map((post) => (
        <div className="post" key={post._id}>
          <div className="position-relative">
            <div className="post-edit">
              {
                <>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <MoreHorizRoundedIcon
                        style={{ color: "#717171", margin: "0px ​0px 0px -8p" }}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {authorized._id === post.user._id && (
                        <Dropdown.Item
                          onClick={() => {
                            setShow(true);
                            setPostId(post._id);
                          }}
                        >
                          Edit
                        </Dropdown.Item>
                      )}
                      {authorized._id === post.user._id && (
                        <Dropdown.Item
                          onClick={() => {
                            setShowDelete(true);
                            setPostId(post._id);
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              }
            </div>
          </div>
          <div className="poster_header pt-3">
            <img src={post.user.image} />

            <div className="header_name">
              <Link to={`/profile/${post.user._id}`}>
                <h4 className="user_name_hunted">{post.user.name}</h4>
              </Link>
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
