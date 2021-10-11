import { Col, Jumbotron, Row, Spinner } from "react-bootstrap";

const Headerinfo = ({ mydata, isLoading }) => {
  return (
    <Jumbotron>
      {mydata && isLoading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {mydata && (
        <div>
          <p>{mydata.name}</p>
          <img clasName="" src={mydata.image} />
        </div>
      )}
    </Jumbotron>
  );
};

export default Headerinfo;
