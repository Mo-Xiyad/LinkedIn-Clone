import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Modal, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateExperience = ({
  showUpdateModel,
  setShowUpdateModel,
  exp,
  setExp,
  setImage,
  authorized,
  experiences,
}) => {
  const submitUpdateForm = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/experiences/${exp.id}`,
        {
          method: "PUT",
          body: JSON.stringify(exp),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      if (response.ok) {
        setShowUpdateModel(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      size="lg"
      show={showUpdateModel}
      onHide={() => setShowUpdateModel(false)}
    >
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
              value={experiences.role}
              onChange={(e) => setExp({ ...exp, role: e.target.value })}
            />
          </div>

          <div className="input_comp_name">
            <label>Employment type</label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Apprenticeship</option>
            </Form.Control>
            <label>Country-specific employment types</label>
          </div>

          <div className="input_city">
            <label>Location</label>
            {/* <Form.Control
              type="text"
              placeholder="Ex: London, United Kingdom"
              valaue={exp.area}
              onChange={(e) => setExp({ ...exp, area: e.target.value })}
            /> */}
          </div>

          <h5>learn more</h5>
          <div className="input_Company_name ">
            <label>Company name </label>
            {/* <Form.Control
              placeholder="Ex: Microsoft"
              value={exp.company}
              onChange={(e) =>
                setExp({
                  ...exp,
                  company: e.target.value,
                })
              }
            /> */}
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
                  {/* <DatePicker
                    selected={exp.startDate}
                    value={exp.startDate}
                    onChange={(date) =>
                      setExp({
                        ...exp,
                        startDate: date,
                      })
                    }
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                  /> */}
                </Form>
              </div>
              <div>
                <label>End date*</label>
                <Form>
                  {/* <DatePicker
                    selected={exp.endDate}
                    value={exp.endDate}
                    onChange={(date) =>
                      setExp({
                        ...exp,
                        endDate: date,
                      })
                    }
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                  /> */}
                </Form>
              </div>
            </div>
          </div>

          <div className="input_headline">
            <label>Headline</label>
            <Form.Control type="text" placeholder="Ex: Web Developer" />
          </div>

          <div className="input_industry">
            <label>Industry*</label>
            <Form.Control
              type="text"
              placeholder="Ex: Architecture & Planning"
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
              {/* <Form.Control
                class="input_description_text"
                as="textarea"
                rows={3}
                value={exp.description}
                onChange={(e) =>
                  setExp({
                    ...exp,
                    description: e.target.value,
                  })
                }
              /> */}
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
            {/* ==================== IMGAE INPUT  */}
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {/* ==================== END IMGAE INPUT  */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="footer_button">
        <Button onClick={() => submitUpdateForm()}>
          <h5> Save </h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateExperience;
