import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import AddIcon from '@mui/icons-material/Add';

export default function Experiance_mode() {
	// const dateval:Date=new Date(new Date ().getFullYear(), new Date().getMonth(),14)

	return (
		<Modal size="lg" show={false}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add experience
				</Modal.Title>
			</Modal.Header>
			<Modal.Body class="from__body">
				<div className="input_form">
					<div className="input_title">
						<label>Title*</label>
						<Form.Control type="text" placeholder="Ex: Retail Selse Manager" />
					</div>

					<div className="input_comp_name">
						<label>Company name*</label>
						<Form.Control type="text" placeholder="Ex: Retail Selse Manager" />
						<label>Country-specific employment types</label>
					</div>

					<div className="input_city">
						<label>Location</label>
						<Form.Control type="text" placeholder="Ex: Retail Selse Manager" />
						<label>Country-specific employment types</label>
					</div>

					{/* <div className="input_date">
							<label>Date gose here</label>
							<DatePicker value={dateval}></DatePicker>
							<label>Country-specific employment types</label>
						</div> */}

					<div className="input_headline">
						<label>Headline</label>
						<Form.Control type="text" placeholder="Ex: Retail Selse Manager" />
					</div>

					<div className="input_industry">
						<label>Industry*</label>
						<Form.Control type="text" placeholder="Ex: Retail Selse Manager" />
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
