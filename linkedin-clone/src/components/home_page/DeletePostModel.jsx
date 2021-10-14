import React, { useEffect, useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

function DeletePostModel({ showDelete, setShowDelete, postId }) {
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      if (response.ok) {
        setShowDelete(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("delete is about heppan");
    console.log(postId);
  }, [postId]);

  return (
    <Modal show={showDelete} onHide={() => setShowDelete(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete post?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to permanently remove this post from LinkedIn?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDelete(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePostModel;
