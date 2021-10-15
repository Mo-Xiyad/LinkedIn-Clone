import React, { useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import MultiMenus from "../../assats/css/profile_page css/profile-picUpdate-Model.css";
import PanoramaIcon from "@mui/icons-material/Panorama";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
function AddProfileImage({ picUpdate, setPicUpdate, authorized, fetchUser }) {
  const [picture, setPicture] = useState(null);

  const uploadPicture = async () => {
    try {
      let formdata = new FormData();
      formdata.append("profile", picture);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${authorized._id}/picture`,
        {
          method: "POST",
          body: formdata,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      if (response.ok) {
        setPicUpdate(false);
        fetchUser();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
		<Modal show={true} onHide={() => setPicUpdate(false)}>
			{/* <Modal show={picUpdate} onHide={() => setPicUpdate(false)}> */}
			<Modal.Header className="img-upload-box" closeButton>
				<Modal.Title>Profile Picture</Modal.Title>
			</Modal.Header>
			<Modal.Body className="profile-pic-update-body">
				<div className="img-container d-flex justify-content-center">
					<Image className="img-fluid" src={authorized.image} />
				</div>

				{/* <Form.Control
          type="file"
          placeholder="update picture"
          onChange={(e) => setPicture(e.target.files[0])}
        /> */}
			</Modal.Body>
			<Modal.Footer className="img-upload-box-footer">
				<label class="custom-file-upload">
					<input type="file" onChange={(e) => setPicture(e.target.files[0])} />
					<AddAPhotoOutlinedIcon />
					<p>Add Photo</p>
        </label>
        
				<Button className="final_btn__" onClick={() => uploadPicture()}>
					<DeleteForeverIcon />
					<h5> Delete </h5>
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddProfileImage;
