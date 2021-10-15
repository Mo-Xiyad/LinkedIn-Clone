import React, { useState } from 'react';
import { Image, Modal, Button, Form, Container } from 'react-bootstrap';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PanoramaIcon from '@mui/icons-material/Panorama';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/Chat';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Postinput from './Postinput';
import Hidden from '@mui/material/Hidden';
function ProfileModal({ show, setShow, authorized, getdata }) {
	const [values, setValues] = useState();

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				'https://striveschool-api.herokuapp.com/api/posts/',
				{
					method: 'POST',
					body: JSON.stringify({ text: values }),
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o',
					},
				},
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
		let str = '#';
		// let content = "";
		// content += str.repeat(1);
		return str;
	};
	return (
		// <Modal show={show} onHide={() => setShow(false)}>
		<Modal
			dialogClassName="posting_model"
			size="lg"
			show={show}
			onHide={() => setShow(false)}
		>
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
						placeholder="What do you want to talk about?"
						value={values}
						onChange={(e) => setValues(e.target.value)}
					/>
				</Form.Group>
				<div>
					<Button
						className="hastag_posting_btn"
						onClick={(e) => setValues(...addHashtag(e))}
					>
						Add hastag
					</Button>
				</div>
			</Modal.Body>
			<Modal.Footer className="posting_model_footer_cont">
				<div className="posting_model_footer_group_btn_1">
					<div>
						<PanoramaIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<YouTubeIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<DescriptionIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<BusinessCenterIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<Brightness7Icon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div>
						<EqualizerIcon fontSize="large" style={{ color: '#666666' }} />
					</div>

					<div >
						<MoreHorizIcon fontSize="large" style={{ color: '#666666' }} />
					</div>
				</div>

				<div className="posting_model_footer_group_btn_2">
					<ChatIcon style={{ color: '#666666' }} />
					Anyone
				</div>

				<Button
					className="posting_model_post_btn"
					variant="primary"
					onClick={() => handleSubmit()}
				>
					Post
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ProfileModal;
