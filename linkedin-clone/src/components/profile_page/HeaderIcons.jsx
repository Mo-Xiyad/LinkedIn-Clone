import React from 'react';
import { Avatar, Icon } from '@material-ui/core';
export default function HeaderIcons({ title, Icon }) {
	return (
		<div className="headericons">
			<Icon className="header_icons" src={Icon} />
			<h5 className="header_title">{title}</h5>
		</div>
	);
}
