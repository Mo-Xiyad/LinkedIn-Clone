import { Avatar } from '@material-ui/core';
import React from 'react';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
export default function Sidebar(props) {
	const recentitem = (text) => (
		<div className="recentitembox">
			<span className="recentitem_#">#</span>
			<p className="recentitem_p">{text}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar_main">
				<div className="sidebar_avatar">
					<img
						className="img-fluid"
						// src={props.img}
						src="https://png.pngtree.com/background/20210714/original/pngtree-blue-carbon-background-with-sport-style-and-golden-light-picture-image_1200848.jpg"
					/>
					<Avatar />
					<h3>Props.name</h3>
					<h5>React Developer| Mobile App | Web Page | UXUI </h5>
				</div>

				<div className="sidebar_texts">
					<div className="textclass_1">
						<h6 className="text">Connections</h6>
						<h6 className="number">121</h6>
					</div>

					<div className="textclass_1">
						<h6 className="text">Who viewed you</h6>
						<h6 className="number">21</h6>
					</div>

					<div className="textclass_2">
						<h6>
							<AssistantPhotoIcon color="success" />
							Try Premium for free
						</h6>
					</div>
					<div className="textclass_2">
						<h6>
							<TurnedInIcon /> My items
						</h6>
					</div>
				</div>
			</div>

			<div className="sidebar_recent">
				<h5>Recent</h5>
				<div>
					{recentitem('Lorem ipsum dolor sit amet ')}
					{recentitem('Praesentium, placeat? Veritatis, quia!')}
					{recentitem('laborum temporibus nam hic')}
					{recentitem('Lorem ipsum dolor sit amet ')}
					{recentitem('Praesentium, placeat? Veritatis, quia!')}
					{recentitem('laborum temporibus nam hic')}
				</div>
			</div>
		</div>
	);
}
