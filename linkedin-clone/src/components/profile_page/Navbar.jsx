import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<img
						src="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
						width="20px"
						alt=""
					/>
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>
			<div className="header_right"></div>
		</div>
	);
}
