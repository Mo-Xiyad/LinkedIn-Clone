import React, { useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

function ProfileModal({ show, setShow, authorized, getdata }) {
  const [values, setValues] = useState();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify({ text: values }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      //   alert("all done");
      setShow(false);

      getdata();
      //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addHashtag = (e) => {
    e.preventDefault();
    let str = "#";
    // let content = "";
    // content += str.repeat(1);
    return str;
  };
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="position-relative d-flex mb-3">
          <div className="post-input-model d-flex">
            <Image className="img-fluid" src={authorized.image} />
            <div>
              <p className="mb-0">
                <strong>{authorized.name}</strong>
              </p>
              <Button>
                <p className="mb-0">
                  <span>
                    <PublicRoundedIcon />{" "}
                  </span>
                  Anyone{" "}
                </p>
              </Button>{" "}
            </div>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            as="textarea"
            placeholder="What do you want to talk about?"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button onClick={(e) => setValues(...addHashtag(e))}>
            Add hastag
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
