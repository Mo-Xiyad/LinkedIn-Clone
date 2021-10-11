import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<img src="SearchIcon" alt="" />
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>
			<div className="header_right"></div>
		</div>
	);
}
