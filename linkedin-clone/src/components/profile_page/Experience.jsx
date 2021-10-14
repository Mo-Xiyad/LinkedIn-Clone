import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Edu_list from "./Edu_list";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Experience({ authorized }) {
  const params = useParams();
  const [experiences, setExperiences] = useState([]);
  const [experienceData, setExperienceData] = useState({
    role: "",
    company: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    area: "",
  });

  //   Getting the exisiting user experience

  const fetchData = async () => {
    const id = params.userId === "me" ? authorized._id : params.userId;
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

        console.log({ data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Getting the exisiting user experience
  const postExperience = async () => {
    try {
      let responce = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experienceData),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );

      if (responce.ok) {
        setWorkModel(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  const [workModel, setWorkModel] = useState(false);

  const [educationModel, setEducationModel] = useState(false);

  const [dateSelected, setDateSelected] = useState(null);

  const [enddateSelected, setEnddateSelected] = useState(null);
  return (
    <div className="experience">
      {/* ------Experience_model--------> */}
      <Modal size="lg" show={workModel} onHide={() => setWorkModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="from__body">
          <div className="input_form">
            <div className="input_title">
              <label>Title*</label>
              <Form.Control
                value={experienceData.role}
                onChange={(e) =>
                  setExperienceData({ ...experienceData, role: e.target.value })
                }
              />
            </div>

            <div className="input_comp_name">
              <label>Company name*</label>
              <Form.Control
                value={experienceData.company}
                onChange={(e) =>
                  setExperienceData({
                    ...experienceData,
                    company: e.target.value,
                  })
                }
              />
              <label>Country-specific employment types</label>
            </div>

            <div className="input_city">
              <label>Location</label>
              <Form.Control
                type="text"
                valaue={experienceData.area}
                placeholder="Ex: Retail Selse Manager"
                onChange={(e) =>
                  setExperienceData({ ...experienceData, area: e.target.value })
                }
              />
            </div>
            <Form.Check
              type="checkbox"
              label="I am currently working in this role"
            />
            <div className="input_date">
              <div className="start_date">
                <div>
                  <label>Start date*</label>
                  <Form>
                    startDate
                    <DatePicker
                      value={experienceData.startDate}
                      onChange={(date) =>
                        setExperienceData({
                          ...experienceData,
                          startDate: date,
                        })
                      }
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
                <div>
                  <label>End date*</label>
                  <Form>
                    <DatePicker
                      value={experienceData.endDate}
                      onChange={(date) =>
                        setExperienceData({
                          ...experienceData,
                          endDate: date,
                        })
                      }
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
              </div>
            </div>

            {/* <div className="input_date">
							<label>Date gose here</label>
							<DatePicker value={dateval}></DatePicker>
							<label>Country-specific employment types</label>
						</div> */}

            <div className="input_headline">
              <label>Headline</label>
              <Form.Control
                type="text"
                placeholder="Ex: Retail Selse Manager"
              />
            </div>

            <div className="input_industry">
              <label>Industry*</label>
              <Form.Control
                type="text"
                placeholder="Ex: Retail Selse Manager"
              />
              <label>
                LinkedIn uses industry information to provide more relevant
                recommendations
              </label>
            </div>

            <div className="input_description">
              <label>Description</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                  value={experienceData.description}
                  onChange={(e) =>
                    setExperienceData({
                      ...experienceData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>

            <div className="input_last">
              <h5>Media</h5>
              <h6>
                Add or link to external documents, photos, sites, videos, and
                presentations.
              </h6>
              <h6>Learn more</h6>
              <button>
                <h5>
                  <AddIcon />
                  Add Meddia
                </h5>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer_button">
          <Button onClick={() => postExperience()}>
            <h5> Save </h5>
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ------Education_model--------> */}
      <Modal
        size="lg"
        show={educationModel}
        onHide={() => setEducationModel(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body class="from__body">
          <div className="input_form">
            <div className="input_title">
              <label>School*</label>
              <Form.Control type="text" placeholder="Ex: Strive School" />
            </div>

            <div className="input_comp_name">
              <label>Degree</label>
              <Form.Control type="text" placeholder="Ex: Bachelor's" />
            </div>

            <div className="input_city">
              <label>Field of study </label>
              <Form.Control type="text" placeholder="Ex: Business" />
            </div>
            <div className="input_date">
              <div className="start_date">
                <div>
                  <label>Start date*</label>
                  <Form>
                    <DatePicker
                      value={dateSelected}
                      selected={dateSelected}
                      onChange={(date) => setDateSelected(date)}
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
                <div>
                  <label>End date*</label>
                  <Form>
                    <DatePicker
                      value={enddateSelected}
                      selected={enddateSelected}
                      onChange={(date) => setEnddateSelected(date)}
                      isClearable
                      showYearDropdown
                      scrollableMonthYearDropdown
                    />
                  </Form>
                </div>
              </div>
            </div>

            <div className="input_headline">
              <label>Grade</label>
              <Form.Control type="text" placeholder="Ex: 3.5" />
            </div>

            <div className="input_description">
              <label>Activities and societies</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </div>

            <div className="input_description">
              <label>Description</label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  class="input_description_text"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </div>

            <div className="input_last">
              <h5>Media</h5>
              <h6>
                Add or link to external documents, photos, sites, videos, and
                presentations.
              </h6>
              <h6>Learn more</h6>
              <br />
              <button>
                <h5>
                  <AddIcon />
                  Add Meddia
                </h5>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer_button">
          <Button>
            <h5> Save </h5>
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="adding_exp">
        <h5 className="experience_title">Experience</h5>
        <div className="experience-button">
          <button onClick={() => setWorkModel(true)}>
            <AddIcon fontSize="large" />
          </button>
        </div>
      </div>
      {experiences.map((experience) => (
        <div className="experience_list">
          <img
            className="img-fluid wiges_onlibottom_listimg"
            src={experience.image}
          />

          <div className="experience_list_txt">
            <h5>{experience.role}</h5>
            <p>{experience.company}</p>
          </div>
          <hr />
        </div>
      ))}
      <div className="edu_list">
        <div className="adding_edu">
          <h5 className="edu_list_title">Education</h5>
          <div className="education-button">
            <AddIcon onClick={() => setEducationModel(true)} fontSize="large" />
          </div>
        </div>
        <Edu_list />
      </div>
    </div>
  );
}
