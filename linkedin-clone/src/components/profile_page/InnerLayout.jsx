import { Container } from 'react-bootstrap';
import Outterlayout from './Outterlayout';
import Aside from './Aside';
import Headerinfo from './Headerinfo';
import { fetchData } from '../../assats/js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YourDashboard from './Yourdashboard';
import Activity from './Activity';
import Experience from './Experience';
import Interests from './Interests';
import Skills_endorsements from './Skills_endorsements';
import Footer_big from './Footer_big';
import Experiance_model from './Experiance_mode';
import Edu_mode from './Edu_mode';
const InnerLayout = ({ authorized, setProfile, profile }) => {
	const params = useParams();

	const fetchUser = async () => {
		console.log('fetching profile');
		try {
			const user = await fetchData(params.userId, 'GET');
			setProfile(user);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [params.userId]);
	console.log({ profile });

	return (
		<Container className="profil_page">
			<div className="profil_container">
				{profile && (
					<>
						<Headerinfo
							profile={profile}
							authorized={authorized}
							fetchUser={fetchUser}
						/>
						<YourDashboard />
						<Activity />
						<Experience authorized={authorized} />
						<Skills_endorsements />
						<Interests />
						<Experiance_model />
						<Edu_mode />
					</>
				)}
			</div>
			<Aside />
			<Footer_big />
		</Container>
	);
};

export default InnerLayout;
