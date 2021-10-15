import React, { useEffect, useState } from "react";
import { Image, Modal, Button, Form } from "react-bootstrap";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import PanoramaIcon from '@mui/icons-material/Panorama';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import Brightness7Icon from '@mui/icons-material/Brightness7';
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
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o",
          },
        }
      );
      //   alert("all done");
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, [postId]);

  return (
		<Modal
			dialogClassName="editing_model"
			size="lg"
			show={show}
			onHide={() => setShow(false)}
		>
			<Modal.Header closeButton>
				<Modal.Title>Edit yes post</Modal.Title>
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
										<PublicRoundedIcon />{' '}
									</span>
									Anyone{' '}
								</p>
							</Button>{' '}
						</div>
					</div>
				</div>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Control
						as="textarea"
						value={values.text}
						onChange={(e) => setValues({ ...values, text: e.target.value })}
					/>
				</Form.Group>
			</Modal.Body>
			<Modal.Footer className="posting_model_footer_cont">
				<div className="posting_model_footer_group_btn_1">
					{/* ================================= */}
					<div>
						<lable id="post_img_btn">
							<input type="file" />
							<PanoramaIcon
								fontSize="large"
								style={{ color: '#666666' }}
							/>{' '}
							Text
						</lable>
					</div>
					{/* ================================= */}

					<div>
						<YouTubeIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<DescriptionIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<BusinessCenterIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<Brightness7Icon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div className="d-none d-lg-inline">
						<EqualizerIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<MoreHorizIcon fontSize="large" style={{ color: '#666666' }} />
					</div>
				</div>
				<Button
					className="posting_model_post_btn"
					variant="primary"
					onClick={() => handleSubmit()}
				>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default EditpostModel;
