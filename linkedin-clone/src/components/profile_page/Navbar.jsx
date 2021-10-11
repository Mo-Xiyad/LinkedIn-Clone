import React from 'react';
import HearedIcons from './HearedIcons';
import { FaHome } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<BiSearchAlt2 />
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>

			<div className="header_right">
				<HearedIcons title="Home" icon="{<FaHome />}" />
				<HearedIcons title="My Network" icon="FaHome" />
				<HearedIcons title="Jobs" icon="FaHome" />
				<HearedIcons title="Messaging" icon="FaHome" />
				<HearedIcons
					avatar="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
					title="ME"
				/>
			</div>
		</div>
	);
}
