import React from 'react';
import Edu_list from './Edu_list';

export default function Experience() {
	return (
		<div className="experience">
			<h5 className="experience_title">Experience</h5>
			<div className="experience_list">
				<img
					className="img-fluid wiges_onlibottom_listimg"
					src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
				/>

				<div className="experience_list_txt">
					<h5>Lorem, ipsum dolor onsectetur</h5>
					<p>User Comented</p>
					<p>User Comented</p>
					<p>User Comented</p>
				</div>
			</div>
			<Edu_list/>
		</div>
	);
}
