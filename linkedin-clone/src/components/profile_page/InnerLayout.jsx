import { Col, Jumbotron, Row } from "react-bootstrap";
import Outterlayout from "./Outterlayout";
import Aside from "./Aside";
import Headerinfo from "./Headerinfo";

const InnerLayout = () => {
  return (
    <Outterlayout>
      <div className=" col-sm-6 col-md-7 col-lg-8">
        <Headerinfo />
        <Headerinfo />
        <Headerinfo />
        <Headerinfo />
        <Headerinfo />
      </div>
      {/* Side bar will be inserted here */}
      <Aside />
    </Outterlayout>
  );
};

export default InnerLayout;
