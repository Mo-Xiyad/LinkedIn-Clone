import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Skil_list from './Skil_list';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Edu_mode from './Edu_mode';
export default function Skills_endorsements() {
	return (
		<div className="skills_endorsements">
			<Edu_mode />
			<div className="adding_edu">
				<h4 className="endorsements_title">Skills & endorsements</h4>
				<div className="skills-button">
					<h5>Add a new skill</h5>
					<button>
						<ModeEditIcon fontSize="large" />
					</button>
				</div>
			</div>

			<button>
				<h5>Take skill quiz</h5>
			</button>
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<Skil_list />
			<div>
				<h5>
					Show more <ArrowDropDownIcon />
				</h5>
			</div>
		</div>
	);
}
