import React from 'react';
import Postinput from './Postinput';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
export default function Post() {
	return (
		<div className="post">
			<div className="poster_header">
				<img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />

				<div className="header_name">
					<h4>Name</h4>
					<p>Discription</p>
				</div>
			</div>
			<h4 className="poster_blog">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aut
				veniam obcaecati quis odio excepturi. Nisi officiis, in, odio,
				perspiciatis sit maxime culpa voluptates recusandae aliquam veritatis
				inventore adipisci quaerat.
			</h4>
			{/* <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" /> */}

			<div className="poster_icon">
				<Postinput Icon={ThumbUpAltIcon} title="Like" />
				<Postinput Icon={MessageIcon} title="Comment" />
				<Postinput Icon={ShareIcon} title="Share" />
				<Postinput Icon={SendIcon} title="Send" />
			</div>
		</div>
	);
}
