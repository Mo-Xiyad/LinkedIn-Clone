import React from 'react';
import HearedIcons from './HearedIcons';
import HomeIcon from '@material-ui/icons/Home';

export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<img
						src="https://www.pngfind.com/pngs/m/133-1338299_scholarly-search-icon-small-png-transparent-png.png"
						width="20px"
						alt=""
					/>
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>

			<div className="header_right">
				<HearedIcons
					title="Home"
					icon="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
				/>
				<HearedIcons
					title="My Network"
					icon="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
				/>
				<HearedIcons
					title="Jobs"
					icon="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
				/>
				<HearedIcons
					title="Messaging"
					icon="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
				/>
				<HearedIcons
					title="Notifications"
					icon="https://www.clipartmax.com/png/middle/228-2288671_search-icon-clip-art-at-clkercom-vector-online-royalty-search-icon-free.png"
				/>
			</div>
		</div>
	);
}
