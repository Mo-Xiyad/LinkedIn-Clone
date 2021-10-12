import React from 'react';

export default function Input({ title, color, Icon }) {
	return (
		<div className="input_type">
			<Icon />
			<h5>{title}</h5>
		</div>
	);
}
