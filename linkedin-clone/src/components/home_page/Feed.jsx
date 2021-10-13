import React from "react";
import Melogo from "../profile_page/Melogo";
import Postinput from "./Postinput";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
export default function Feed({ authorized }) {
  return (
    <div className="feeds">
      <div className="feeding">
        <div className="posting_area">
          <Melogo authorized={authorized} />
          <form>
            <input placeholder="Start a post" />
            <button type="submit"></button>
          </form>
        </div>
        <div className="postoption">
          <Postinput
            color="#70B5F9"
            Icon={AddPhotoAlternateIcon}
            title="Photo"
          />
          <Postinput color="#7FC15E" Icon={YouTubeIcon} title="Video" />
          <Postinput color="#E7A33E" Icon={DateRangeIcon} title="Event" />
          <Postinput color="#FC9295" Icon={ArticleIcon} title="Write artice" />
        </div>
      </div>

      <div className="postfeed">
        <Post />
      </div>
    </div>
  );
}
