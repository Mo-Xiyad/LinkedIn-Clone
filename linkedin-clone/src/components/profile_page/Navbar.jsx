import React from 'react';
import HearedIcons from './HearedIcons';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
export default function Navbar() {
	return (
		<div className="header">
			<div className="header_left">
				<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header_search">
					<SearchIcon />
					<input type="text" name="" placeholder="Search" id="" />
				</div>
			</div>

			<div className="header_right">
				<HearedIcons title="Home" Icon={HomeIcon} />
				<HearedIcons title="My Network" Icon={PeopleAltIcon} />
				<HearedIcons title="Jobs" Icon={BusinessCenterIcon} />
				<HearedIcons title="Jobs" Icon={SmsIcon} />
				<HearedIcons title="Messaging" Icon={NotificationsIcon} />
				<HearedIcons
					avatar="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
					title="ME"
				/>
			</div>
		</div>
	);
}
