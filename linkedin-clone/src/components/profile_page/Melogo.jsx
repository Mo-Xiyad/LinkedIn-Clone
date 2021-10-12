import React from 'react';

export default function Melogo({ title }) {
	return (
		<div className="headericons_avatar">
			<img
				src="http://highlinewest.com/wp/wp-content/uploads/2016/01/linkedin-profile-photos-vancouver-bc-amanda.jpg"
				alt=""
			/>
			<h5 className="header_title">{title}</h5>
		</div>
	);
}
