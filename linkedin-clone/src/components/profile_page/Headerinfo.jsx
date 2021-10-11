import { Link } from "@material-ui/core";
import { Button, Image, Col, Jumbotron, Row, Spinner } from "react-bootstrap";
import "../../assats/css/profile_page css/headeinfo.css";

const Headerinfo = ({ mydata, isLoading }) => {
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
            <div className="user-connetions">
              <p className="pt-2">
                <strong className="text-muted">
                  <Link>500+ connections</Link>
                </strong>
              </p>
              <div className="d-flex">
                <div className="btn-one">
                  <Button>Open to</Button>{" "}
                </div>
                <div className="mx-2 btn-two">
                  <Button>Add section</Button>{" "}
                </div>
                <div className="btn-three">
                  <Button>More</Button>{" "}
                </div>
                {/* <Button>Open to</Button> <Button>Add section</Button>{" "}
                <Button>More</Button>{" "} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Jumbotron>
  );
};

export default Headerinfo;
