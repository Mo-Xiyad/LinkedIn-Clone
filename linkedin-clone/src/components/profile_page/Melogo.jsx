import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Melogo({ title, to }) {
  return (
    <div className="headericons_avatar">
      <img
        src="http://highlinewest.com/wp/wp-content/uploads/2016/01/linkedin-profile-photos-vancouver-bc-amanda.jpg"
        alt=""
      />
      <div className="header_title_container">
        <h6 className="header_title">{title}</h6>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
