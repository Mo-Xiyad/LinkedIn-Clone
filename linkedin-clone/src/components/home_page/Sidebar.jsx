import { Avatar } from '@material-ui/core';
import React from 'react';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_avatar">
				<img
					className="img-fluid"
					src="https://png.pngtree.com/background/20210714/original/pngtree-blue-carbon-background-with-sport-style-and-golden-light-picture-image_1200848.jpg"
				/>
				<Avatar />
				<h3>Abnet Nega</h3>
				<h5>React Developer| Mobile App | Web Page | UXUI </h5>
			</div>

			<div className="sidebar_texts">
				<div className="textclass_1">
					<h5 className="text">Connections</h5>
					<h6 className="number">121</h6>
				</div>
				<div className="textclass_1">
					<h5 className="text">Who viewed your profile</h5>
					<h6 className="number">21</h6>
				</div>

				<div className="textclass_2"></div>
			</div>

			<div className="sidebar_recent"></div>
		</div>
	);
}
