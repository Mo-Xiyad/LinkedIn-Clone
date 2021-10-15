import React from "react";
import HeaderIcons from "./HeaderIcons";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AppsIcon from "@mui/icons-material/Apps";
import Hidden from "@mui/material/Hidden";
import { withRouter } from "react-router";
import Melogo from "./Melogo";
import { Link } from "react-router-dom";
import { Image, Container } from "react-bootstrap";

function Navbar({ authorized }) {
  return (
    <div className="w-100 bg-white">
      <Container className="header">
        <div className="header_left position-relative">
          <Link to={"/"}>
            <Image
              className="linkedinlogo"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            />
          </Link>
          <div className="header_search">
            <div className="d-none d-sm-inline">
              <SearchIcon className="header_search_icon" />
            </div>
            <input
              type="text"
              className="d-none d-lg-inline"
              placeholder="Search"
              id=""
            />
          </div>
        </div>

        <div className="header_right">
          <HeaderIcons to={"/"} title="Home" Icon={HomeIcon} />
          <HeaderIcons title="My Network" Icon={PeopleAltIcon} />
          <HeaderIcons title="Jobs" Icon={BusinessCenterIcon} />

          <HeaderIcons title="Messaging" Icon={SmsIcon} />
          <HeaderIcons title="Notifications" Icon={NotificationsIcon} />
          <Link to={"/profile/me"}>
            <Melogo title="ME" authorized={authorized} />
          </Link>
          <HeaderIcons title="Work" Icon={AppsIcon} />
          <div className="notif_text d-none d-lg-inline ">
            <p className="mb-0">Try Preminum for </p>
            <p className="mb-0">Free</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default withRouter(Navbar);
