import React from 'react';

import { Avatar, Icon } from '@material-ui/core';
export default function HearedIcons({ avatar, title, icon }) {
	return (
		<div className="hearedicons">
			{icon && <Icon className="heared_icons" src={icon} />}
			{avatar && <Avatar className="heared_icons" src={avatar} />}
			<h5 className="heared_title">{title}</h5>
		</div>
	);
}
