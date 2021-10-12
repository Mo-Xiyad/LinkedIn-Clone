import React from 'react';
import Melogo from '../profile_page/Melogo';
import Postinput from './Postinput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArticleIcon from '@mui/icons-material/Article';
export default function Feed() {
	return (
		<div className="feeds">
			<div className="feeding">
				<div className="posting_area">
					<Melogo />
					<form>
						<input placeholder="Start a post" />
						<button type="submit"></button>
					</form>
				</div>
				<div className="postoption">
					<Postinput color="blue" Icon={AddPhotoAlternateIcon} title="Photo" />
					<Postinput color="green" Icon={YouTubeIcon} title="Video" />
					<Postinput color="orange" Icon={DateRangeIcon} title="Event" />
					<Postinput color="red" Icon={ArticleIcon} title="Write artice" />
				</div>
			</div>

			<div className="postfeed">
				<h2>222</h2>
			</div>
		</div>
	);
}
