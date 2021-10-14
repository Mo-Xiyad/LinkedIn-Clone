import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
function ProfileModal({ show, setShow, authorized, fetchUser }) {
	const [values, setValues] = useState(authorized);

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				'https://striveschool-api.herokuapp.com/api/profile/',
				{
					method: 'PUT',
					body: JSON.stringify(values),
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0OTE0M2E4OTBjYzAwMTVjZjA3ZjQiLCJpYXQiOjE2MzM5ODA3MzksImV4cCI6MTYzNTE5MDMzOX0.KuT_PgG7s0jzEK_t0MA93LSE7cV3svViPrJzVXJeJ-o',
					},
				},
			);
			setShow(false);
			fetchUser();
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		// <Modal show={show} onHide={() => setShow(false)}>
		<Modal size="lg" show={true} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Edit intro</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="all_profile_inputs">
					<div className="model_name_input">
						<div>
							<Form.Label>First Name*</Form.Label>
							<Form.Control
								value={values.name}
								onChange={(e) => setValues({ ...values, name: e.target.value })}
							/>
						</div>
						<div>
							<Form.Label>Last Name*</Form.Label>
							<Form.Control
								value={values.name}
								onChange={(e) => setValues({ ...values, name: e.target.value })}
							/>
						</div>
					</div>
					<h5>Add former name</h5>

					<h5>
						<AddIcon />
						Record-name pronunciation
					</h5>

					<h5>Name pronunciation can only be added using our mobile app.</h5>

					<div className="model_Pronouns_input">
						<div>
							<Form.Label>Pronouns </Form.Label>
							<Form.Control as="select">
								<option>Please select</option>
								<option>He/Him</option>
								<option>She/Her</option>
								<option>They/Them</option>
							</Form.Control>
							<h5>
								<RemoveRedEyeIcon />
								Visible to: All LinkedIn members
							</h5>
						</div>
					</div>

					<div className="model_headline_input">
						<div>
							<Form.Label>Headline </Form.Label>
							<Form.Control placeholder="Web Developer" />
						</div>
					</div>

					<h5>
						<AddIcon />
						Add current position.
					</h5>
				</div>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Education</Form.Label>
					<Form.Control placeholder="University of Applied Sciences" />
					<Form.Label>Add new Education</Form.Label>
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Country/Region*</Form.Label>
					<Form.Control placeholder="Germany" />
					<div className="model_name_input">
						<div>
							<Form.Label>Postal code</Form.Label>
							<Form.Control placeholder="70502" />
						</div>
						<div>
							<Form.Label>Locations within this area</Form.Label>
							<Form.Control placeholder="Germany" />
						</div>
					</div>
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Industry *</Form.Label>
					<Form.Control as="select">
						<option>Choose an industry</option>
						<option>Accounting</option>
						<option>Airlines/Aviation</option>
						<option>Alternative Dispute Resolutic</option>
						<option>Alternative Medicine</option>
						<option>Animatione</option>
						<option>Arts & Crafts</option>
						<option>Automotive</option>
						<option>Aviation & Aerospace</option>
						<option>Banking</option>
						<option>Biotechnology</option>
						<option>Broadcast Media</option>
						<option>Building Materials</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						value={values.email}
						onChange={(e) => setValues({ ...values, email: e.target.value })}
					/>
				</Form.Group>
			</Modal.Body>
			<Modal.Footer className="footer_button">
				<Button>
					<h5> Save </h5>
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ProfileModal;
