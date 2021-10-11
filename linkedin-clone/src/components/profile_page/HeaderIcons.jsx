import React from 'react';
import { Avatar, Icon } from '@material-ui/core';
export default function HeaderIcons({ avatar, title, Icon }) {
	return (
		<div className="hearedicons">
			{Icon && <Icon className="heared_icons" src={Icon} />}
			<h5 className="heared_title">{title}</h5>
			{avatar && <Avatar className="heared_avatar " src={avatar} />}
		</div>
	);
}
