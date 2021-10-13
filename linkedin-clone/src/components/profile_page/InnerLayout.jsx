import { Col, Jumbotron, Row, Spinner } from "react-bootstrap";
import Outterlayout from "./Outterlayout";
import Aside from "./Aside";
import Headerinfo from "./Headerinfo";
import { fetchData } from "../../assats/js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YourDashboard from "./Yourdashboard";
import Activity from "./Activity";
import Experience from "./Experience";

const InnerLayout = ({ authorized }) => {
  const params = useParams();
  const [profile, setProfile] = useState(null);

  const fetchUser = async () => {
    console.log("fetching profile");
    try {
      const user = await fetchData(params.userId, "GET");
      setProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [params.userId]);
  console.log({ profile });

  return (
    <Outterlayout>
      <div className=" col-sm-6 col-md-7 col-lg-8">
        {profile && (
          <>
            <Headerinfo
              profile={profile}
              authorized={authorized}
              fetchUser={fetchUser}
            />
            <YourDashboard />
            <Activity />
            <Experience authorized={authorized} />
            {/* use this area o add other COMPONENTS  */}
            {/* SKILLS  */}
            {/* ANDOSMENT  */}
          </>
        )}
      </div>
      {/* Side bar will be inserted here */}
      <Aside />
    </Outterlayout>
  );
};

export default InnerLayout;
