import { Avatar } from '@material-ui/core';
import React from 'react';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_avatar">
				<img />
				<Avatar />
				<h3>Abnet Nega</h3>
				<h5>React Developer| Mobile App | Web Page | UXUI </h5>
			</div>
			<div className="sidebar_texts">
				<div className="textclass_1">
					<h5 className="text">Connections</h5>
					<h6 className="number">121</h6>
				</div>

				<div className="textclass_2"></div>
			</div>

			<div className="sidebar_recent"></div>
		</div>
	);
}
