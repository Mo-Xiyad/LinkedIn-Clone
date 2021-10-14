import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AddIcon from '@mui/icons-material/Add';

export default function Edu_mode() {
	return (
		<Modal size="lg" show={false}>
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
						<label>Country-specific employment types</label>
					</div>

					<div className="input_city">
						<label>Field of study </label>
						<Form.Control type="text" placeholder="Ex: Business" />
						<label>Country-specific employment types</label>
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
	);
}
