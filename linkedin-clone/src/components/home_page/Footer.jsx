import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Footer() {
	return (
		<div className="footer">
			<div className="txt_row_first">
				<p>About</p>
				<p>Accessibility </p>
				<p>Help Center</p>
			</div>
			<div className="txt_row_second">
				<p>Impressum </p>
				<p>
					Privacy & Terms
					<KeyboardArrowDownIcon />
				</p>
			</div>
			<div className="txt_row_second">
				<p>Ad Choices </p>
				<p>Advertising</p>
			</div>
			<div className="txt_row_three">
				<p>
					Business Services
					<KeyboardArrowDownIcon />
				</p>
				<p>Get the LinkedIn app</p>
			</div>
			<div className="txt_row_second">
				<p>More</p>
			</div>
			<div className="txt_row_unic">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
				<h6>LinkedIn Corporation © 2021</h6>
			</div>
		</div>
	);
}
