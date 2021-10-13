import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Edu_list from "./Edu_list";

export default function Experience({ authorized }) {
  const params = useParams();
  const [experiences, setExperiences] = useState([]);

  const fetchData = async () => {
    const id = params.userId === "me" ? authorized.userId : params.userId;
    try {
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  return (
    <div className="experience">
      <h5 className="experience_title">Experience</h5>

      {experiences.map((experience) => (
        <div className="experience_list">
          <img
            className="img-fluid wiges_onlibottom_listimg"
            src={experience.image}
          />

          <div className="experience_list_txt">
            <h5>{experience.role}</h5>
            <p>{experience.company}</p>
            {/* <p>User Comented</p>
              <p>User Comented</p> */}
          </div>
        </div>
      ))}

      <Edu_list />
    </div>
  );
}
