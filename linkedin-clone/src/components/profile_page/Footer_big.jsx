import React from 'react';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { Container, Form } from 'react-bootstrap';

export default function Footer_big() {
	return (
		<Container className="profil_page footer_big">
			<div className="footer_box_1">
				<img
					height="25px"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX6XACV3iEyn2z_c4LJCBXNjnV8TgDYVK5oblGS9oPJHTOhVUtPLkCv1KdAW6BC4yAQ&usqp=CAU"
				/>
				<ui>
					<li>About</li>
					<li>Community</li>
					<li>Guidelines</li>
					<li>Privacy & Terms</li>
					<li>About</li>
				</ui>
				<p>LinkedIn Corporation © 2021</p>
			</div>

			<div className="footer_box_2">
				<ui>
					<li>Accessibility</li>
					<li>Careers</li>
					<li>Ad Choices</li>
					<li>Mobile</li>
					<li>About</li>
				</ui>
			</div>

			<div className="footer_box_3">
				<ui>
					<li>Talent Solutions</li>
					<li>Marketing Solutions</li>
					<li>Advertising</li>
					<li>Small Business</li>
				</ui>
			</div>

			<div className="footer_box_4">
				<div className="footer_box_44">
					<HelpIcon cclassName="bigfootericons" />
					<div>
						<h5>Questions?</h5>
						<p>Visit our Help Center.</p>
					</div>
				</div>

				<div className="footer_box_44">
					<SettingsIcon className="bigfootericons" />
					<div>
						<h5>Manage your account...</h5>
						<p>Go to your Settings.</p>
					</div>
				</div>
			</div>

			<div className="footer_box_5">
				<p>Select Language</p>
				<Form.Control as="select">
					<option>English (English )</option>
					<option>Mandarin Chinese</option>
					<option>Spanish</option>
				</Form.Control>
			</div>
		</Container>
	);
}
