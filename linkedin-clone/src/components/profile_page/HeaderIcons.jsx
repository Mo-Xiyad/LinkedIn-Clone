import React from 'react';
import { Avatar, Icon } from '@material-ui/core';
export default function HeaderIcons({ avatar, title, Icon }) {
	return (
		<div className="headericons">
			{Icon && <Icon className="header_icons" src={Icon} />}
			<h5 className="header_title">{title}</h5>
			<div className="headericons_avatar">
				{avatar && <Avatar className="header_avatar " src={avatar} />}
				
			</div>
		</div>
	);
}
