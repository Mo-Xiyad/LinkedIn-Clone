import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Outterlayout extends Component {
  render() {
    return (
      <main className="content" role="main">
        <Row className="content-main">{this.props.children}</Row>
      </main>
    );
  }
}

export default Outterlayout;