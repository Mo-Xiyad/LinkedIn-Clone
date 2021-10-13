import React from "react";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function HeaderIcons({ avatar, title, Icon, to }) {
  return (
    <div className="headericons">
      {Icon && (
        <IconButton component={Link} to={to}>
          <Icon className="header_icons" src={Icon} />
        </IconButton>
      )}
      <h5 className="header_title">{title}</h5>
      <div className="headericons_avatar">
        {avatar && <Avatar className="header_avatar " src={avatar} />}
      </div>
    </div>
  );
}
