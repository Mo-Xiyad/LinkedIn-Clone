import React, { useState, useEffect } from 'react';
import Postinput from './Postinput';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Dropdown, DropdownButton, Button, Image } from 'react-bootstrap';
import EditpostModel from './EditpostModel';
import DeletePostModel from './DeletePostModel';
// import PostPictureModel from "./PostPictureModel";
import { Link } from 'react-router-dom';

export default function Post({ profile, authorized, posts, getdata }) {
	const [show, setShow] = useState(false);

	const [showPostPicture, setShowPostPicture] = useState(false);

	const [showDelete, setShowDelete] = useState(false);

	const [comment, setComment] = useState(false);
	setComment(!comment);

	const postTimer = (x) => {
		const postedDateISO = x;
		const postedDate = new Date(postedDateISO).getTime();
		const dateToday = new Date().getTime();
		const milliseconds = Math.abs(dateToday - postedDate).toString();

		const minutes = parseInt(milliseconds / 1000 / 60);
		const hours = parseInt(minutes / 60);
		const days = parseInt(hours / 24);
		let date;

		if (days > 0) {
			//console.log(`${days}d`);
			date = `${days} d`;
		} else if (days == 0 && hours >= 1) {
			//console.log(`${hours}hr`);
			date = `${hours} hr`;
		} else if (hours < 1) {
			//console.log(`${minutes}min`);
			date = `${minutes} min`;
		}
		return date;
	};
	const [postId, setPostId] = useState();
	useEffect(() => {}, []);
	return (
		<>
			<EditpostModel
				show={show}
				setShow={setShow}
				authorized={authorized}
				postId={postId}
				getdata={getdata}
			/>
			<DeletePostModel
				showDelete={showDelete}
				setShowDelete={setShowDelete}
				postId={postId}
			/>

			{posts.map((post) => (
				<div className="post" key={post._id}>
					<div className="position-relative">
						<div className="post-edit">
							{
								<>
									<Dropdown>
										<Dropdown.Toggle id="dropdown-basic">
											<MoreHorizRoundedIcon
												style={{ color: '#717171', margin: '0px ​0px 0px -8p' }}
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											{authorized._id === post.user._id && (
												<Dropdown.Item
													onClick={() => {
														setShow(true);
														setPostId(post._id);
													}}
												>
													Edit
												</Dropdown.Item>
											)}
											{authorized._id === post.user._id && (
												<Dropdown.Item
													onClick={() => {
														setShowDelete(true);
														setPostId(post._id);
													}}
												>
													Delete
												</Dropdown.Item>
											)}
											<Dropdown.Item>Another action</Dropdown.Item>
											<Dropdown.Item>Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</>
							}
						</div>
					</div>
					<div className="poster_header pt-3">
						<Image src={post.user.image} />

						<div className="header_name">
							<Link to={`/profile/${post.user._id}`}>
								<h4 className="user_name_hunted">{post.user.name}</h4>
							</Link>
							<p>{post.user.title}</p>
							<p>{postTimer(post.createdAt)}</p>
						</div>
					</div>
					<div className="poster_blog">
						<p className="">{post.text}</p>
					</div>
					<div className="img_container">
						<Image className="img-fluid" src={post.image} />
					</div>
					<div className="poster_icon">
						<Postinput Icon={ThumbUpAltIcon} title="Like" />
						<Postinput
							onClick={setComment}
							Icon={MessageIcon}
							title="Comment"
						/>
						<Postinput Icon={ShareIcon} title="Share" />
						<Postinput Icon={SendIcon} title="Send" />
					</div>
				</div>
			))}
		</>
	);
}
