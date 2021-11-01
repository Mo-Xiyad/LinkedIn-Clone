import React from 'react';
import CommentModel from './CommentModel';
export default function Postinput({ onClick, title, color, Icon }) {
	return (
		<>
			<div className="input_type">
				<Icon style={{ color: color }} />
				<p>{title}</p>
			</div>
			<CommentModel/>
		</>
	);
}
