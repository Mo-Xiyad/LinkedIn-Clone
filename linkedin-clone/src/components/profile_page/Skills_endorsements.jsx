import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Skil_list from './Skil_list';

export default function Skills_endorsements() {
	return (
		<div className="skills_endorsements">
			<h4 className="endorsements_title">Skills & endorsements</h4>
			<button>
				<h5>Take skill quiz</h5>
			</button>
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<div>
				<h5>
					Show more <ArrowDropDownIcon />{' '}
				</h5>
			</div>
		</div>
	);
}
