import React from 'react';
import HeaderIcons from './HeaderIcons';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
import Melogo from './Melogo';
export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img
					className="linkedinlogo"
					src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
				/>

				<div className="header_search">
					<SearchIcon className="header_search_icon" />
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>

			<div className="header_right">
				<HeaderIcons title="Home" Icon={HomeIcon} />
				<HeaderIcons title="My Network" Icon={PeopleAltIcon} />
				<HeaderIcons title="Jobs" Icon={BusinessCenterIcon} />
				<HeaderIcons title="Messaging" Icon={SmsIcon} />
				<HeaderIcons title="Notifications" Icon={NotificationsIcon} />
				<Melogo title="ME" />
				<HeaderIcons title="Work" Icon={AppsIcon} />
				<div className="notif_text">
					<p>Try Preminum for </p>
					<p>Free</p>
				</div>
			</div>
		</div>
	);
}
