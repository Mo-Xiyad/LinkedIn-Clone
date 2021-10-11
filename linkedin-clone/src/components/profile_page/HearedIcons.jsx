import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
export default function HearedIcons({ title, icon }) {
	return (
		<div className="hearedicons">
			{icon && <img className="heared_icons" width="40px" src={icon} />}
			<h5 className="heared_title">{title}</h5>
		</div>
	);
}
