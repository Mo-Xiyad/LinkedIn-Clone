import { Link } from "@material-ui/core";
import { Button, Image, Col, Jumbotron, Row, Spinner } from "react-bootstrap";
import "../../assats/css/profile_page css/headeinfo.css";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
// import "./styles.css";
import MultiMenus from "./MultiMenus";

const Wrapper = styled.aside`
  background: #c52465cc;
  width: 300px;
`;

const menus = [
  {
    label: "Intro",
    submenu: [
      {
        label:
          "Mo, your Intro is looking good! Check out other sections you can add to your profile",
      },
    ],
  },
  {
    label: "About",
    submenu: [
      {
        label: "Looking good, Mo This section is complete.",
      },
    ],
  },
  {
    label: "Featured",
    submenu: [
      {
        label: "Posts",
      },
      {
        label: "Articles",
      },
      { label: "Links" },
      {
        label: "Media",
      },
    ],
  },
  {
    label: "Background",
    submenu: [
      {
        label: "Work experience",
      },
      {
        label: "Education",
      },
      { label: "Licenses & certifications" },
      {
        label: "Volunteer experience",
      },
    ],
  },
  {
    label: "Skills",
    submenu: [
      {
        label: "skills",
      },
    ],
  },
  {
    label: "Accomplishments",
    submenu: [
      {
        label: "Publications",
      },
      {
        label: "Patents",
      },
      { label: "Courses" },
      {
        label: "Honors & awards",
      },
      {
        label: "Test scores",
      },
      {
        label: "Languages",
      },
      {
        label: "Organizations",
      },
      {
        label: "Causes",
      },
    ],
  },
  {
    label: "Additional information",
    submenu: [
      {
        label: "Request a recommendation",
      },
    ],
  },
  {
    label: "Supported languages",
    submenu: [
      {
        label: "Add profile in another language",
      },
    ],
  },
];

const Headerinfo = ({ mydata, isLoading }) => {
  const [buttonclicked, setButtonclicked] = useState(false);

  return (
    <Jumbotron className="position-relative profile-heading-container">
      {mydata && isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {mydata && (
        <div>
          <div>
            <Image
              src="https://lh3.googleusercontent.com/proxy/crqmxY-fNawCC0C1IY4szfxKrPKVcVgfZ2BKhXmcZMwvbq-K_yRO1VlXn5_Zql8CoZfZMyA0PRc_QgFKmBxnnwjv6TpE5tOyGjt7QIro3YPmYG1yvs0"
              className="profile-banner"
            />
          </div>
          <Link>
            <Image
              src={mydata.image}
              roundedCircle
              className="profile-img"
              key={mydata._id}
            />
          </Link>
          <div className="profile-info">
            <Row>
              <div className="col-6">
                <h3>
                  {mydata.name}
                  <small>
                    <span className="font-weight-light">(He/Him)</span>
                  </small>
                </h3>
                <div className="profile-user-details">
                  <p>{mydata.title}</p>
                  <p>
                    <span className="font-weight-light text-muted">
                      {mydata.area},
                    </span>
                    <strong className="text-muted pl-2">
                      <Link>Contact info</Link>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="col-4 offset-2">
                <h3>
                  {mydata.name}
                  <small>
                    <span className="font-weight-light">(He/Him)</span>
                  </small>
                </h3>
              </div>
            </Row>
            <div className="user-connetions position-relative">
              <p className="pt-2">
                <strong className="text-muted">
                  <Link>500+ connections</Link>
                </strong>
              </p>
              <div className="d-flex">
                <div className="btn-one">
                  <Button>Open to</Button>{" "}
                </div>
                <div className="mx-2 btn-two position-relative">
                  <Button onClick={() => setButtonclicked(!buttonclicked)}>
                    Add section
                  </Button>{" "}
                </div>
                {buttonclicked === true ? (
                  <div className="btn-two-drowpdown">
                    <MultiMenus menus={menus} />
                  </div>
                ) : null}
                <div className="btn-three">
                  <Button>More</Button>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* <Wrapper> */}
          {/* </Wrapper> */}
        </div>
      )}
    </Jumbotron>
  );
};

export default Headerinfo;
