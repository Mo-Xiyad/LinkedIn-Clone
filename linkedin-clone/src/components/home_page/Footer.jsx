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
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX6XACV3iEyn2z_c4LJCBXNjnV8TgDYVK5oblGS9oPJHTOhVUtPLkCv1KdAW6BC4yAQ&usqp=CAU" />
				<h6>LinkedIn Corporation © 2021</h6>
			</div>
		</div>
	);
}
