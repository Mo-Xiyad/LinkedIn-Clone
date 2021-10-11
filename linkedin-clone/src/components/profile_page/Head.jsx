import { Col, Jumbotron, Row } from "react-bootstrap";
import Profilelayout from "./Profilelayout";
import Aside from "./Aside";

const Head = () => {
  return (
    <Profilelayout>
      <div className=" col-sm-6 col-md-7 col-lg-8">
        <Jumbotron>
          <p class="mb-0">
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
        </Jumbotron>
      </div>
      {/* Side bar will be inserted here */}
      <Aside />
    </Profilelayout>
  );
};

export default Head;
