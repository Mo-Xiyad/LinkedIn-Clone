import React from 'react';
import { fetchData } from '../../assats/js';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Hidden from '@mui/material/Hidden';
import { Container } from 'react-bootstrap';

export default function Homepage({ authorized }) {
	return (
		<Container className="homepage">
			<Sidebar />
			<Feed authorized={authorized} />
			<Hidden mdDown>
				<Widget />
			</Hidden>
		</Container>
	);
}
