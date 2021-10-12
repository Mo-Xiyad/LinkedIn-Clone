import React from 'react';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';

export default function Homepage() {
	return (
		<div className="homepage">
			<Sidebar />
			{/* <Feed />
			<Widget /> */}
		</div>
	);
}
