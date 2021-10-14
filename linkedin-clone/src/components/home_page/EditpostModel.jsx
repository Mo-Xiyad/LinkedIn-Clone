import React, { useEffect, useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

function EditpostModel({ show, setShow, authorized, postId }) {
  const [values, setValues] = useState({});
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      console.log(postId);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        setValues(data);
        console.log("fetching to update the post");
        console.log(data);
      } else {
        console.log("fetching to update the post was not OK");
      }
    } catch (error) {}
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({ ...values, text: values.text }),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      //   alert("all done");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit post</Modal.Title>
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
            value={values.text}
            onChange={(e) => setValues(e.target.value)}
          />
        </Form.Group>
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

export default EditpostModel;
