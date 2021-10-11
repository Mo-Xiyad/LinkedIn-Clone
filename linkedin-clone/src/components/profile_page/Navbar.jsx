import React from 'react';
import HearedIcons from './HearedIcons';
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<img src="FaHome" width="20px" alt="" />
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>

			<div className="header_right">
				<HearedIcons title="Home" icon="HomeIcon" />
				<HearedIcons title="My Network" icon="AccessAlarmIcon" />
				<HearedIcons title="Jobs" icon="HomeIcon" />
				<HearedIcons title="Messaging" icon="HomeIcon" />
				<HearedIcons
					avatar="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
					title="ME"
				/>
			</div>
			<HearedIcons
				avatar="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
				title="ME"
			/>
		</div>
	);
}
