import React, { useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

function ProfileModal({
  showPostPicture,
  setShowPostPicture,
  authorized,
  postId,
}) {
  const [values, setValues] = useState(null);

  const target = (e) => {
    setValues(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      let formdata = new FormData();
      formdata.append("post", values);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "POST",
          body: formdata,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      setShowPostPicture(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={showPostPicture} onHide={() => setShowPostPicture(false)}>
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
            type="file"
            placeholder="Psot picture"
            onChange={target}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowPostPicture(false)}>
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
