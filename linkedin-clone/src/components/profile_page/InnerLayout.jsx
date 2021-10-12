import { Col, Jumbotron, Row, Spinner } from "react-bootstrap";
import Outterlayout from "./Outterlayout";
import Aside from "./Aside";
import Headerinfo from "./Headerinfo";
import { fetchData } from "../../assats/js";
import { useState, useEffect } from "react";

const InnerLayout = ({ setSelectedUser }) => {
  const [mydata, setMydat] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let dataFromEndpoint = await fetchData("me", "GET");
      setMydat(dataFromEndpoint);
      console.log(dataFromEndpoint);
      setIsLoading(false);
    };
    getData();
    // console.log(mydata);
  }, []);
  if (mydata !== undefined || mydata !== null) {
    setSelectedUser(mydata._id);
  }

  return (
    <Outterlayout>
      <div className=" col-sm-6 col-md-7 col-lg-8">
        {mydata === undefined ? (
          <p>nothing</p>
        ) : (
          <Headerinfo isLoading={isLoading} mydata={mydata} />
        )}
      </div>
      {/* Side bar will be inserted here */}
      <Aside />
    </Outterlayout>
  );
};

export default InnerLayout;
