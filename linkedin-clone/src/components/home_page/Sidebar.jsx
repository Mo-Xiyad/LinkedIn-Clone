import { Avatar } from '@material-ui/core';
import React from 'react';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

export default function Sidebar(props) {
	return (
		<div className="sidebar">
			<div className="sidebar_avatar">
				<img
					className="img-fluid"
					// src={props.img}
					src="https://png.pngtree.com/background/20210714/original/pngtree-blue-carbon-background-with-sport-style-and-golden-light-picture-image_1200848.jpg"
				/>
				<Avatar />
				<h3>{props.name}</h3>
				<h5>React Developer| Mobile App | Web Page | UXUI </h5>
			</div>

			<div className="sidebar_texts">
				<div className="textclass_1">
					<h6 className="text">Connections</h6>
					<h6 className="number">121</h6>
				</div>

				<div className="textclass_1">
					<h6 className="text">Who viewed you</h6>
					<h6 className="number">21</h6>
				</div>
				<br/>

				<div className="textclass_2">
					<h6>Try Premium for free</h6>
				</div>
				<div className="textclass_2">
					<h6>
						<TurnedInIcon /> My items
					</h6>
				</div>
			</div>

			<div className="sidebar_recent"></div>
		</div>
	);
}
