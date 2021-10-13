import 'bootstrap/dist/css/bootstrap.min.css';
import './assats/css/profile_page css/profile_layout.css';
import './assats/css/profile_page css/HeaderIcons.css';
import './assats/css/profile_page css/Navbar.css';
import './assats/css/profile_page css/Melogo.css';
import './assats/css/profile_page css/Yourdashboard.css';
import './assats/css/profile_page css/Dashboardlist.css';
import './assats/css/profile_page css/Experience.css';
import './assats/css/profile_page css/Edu_list.css';
import './assats/css/profile_page css/Activity.css';
import './assats/css/home_page css/Feed.css';
import './assats/css/home_page css/Sidebar.css';
import './assats/css/home_page css/Widget.css';
import './assats/css/home_page css/Homepage.css';
import './assats/css/home_page css/Postinput.css';
import './assats/css/home_page css/Post.css';
import './assats/css/home_page css/Footer.css';
import Navbar from './components/profile_page/Navbar';
import HomePage from './components/home_page/Homepage';
import InnerLayout from './components/profile_page/InnerLayout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {
	const [selectedUser, setSelectedUser] = useState();
	console.log(selectedUser);
	console.log('selectedUser');
	return (
		<div className="App">
			<Router>
				<Navbar selectedUser={selectedUser} />
				<Route path="/" exact={true} component={HomePage} />
				<Route
					path="/profile/:userId"
					exact={true}
					render={({ routProps }) => (
						<InnerLayout
							{...routProps}
							setSelectedUser={setSelectedUser}
							selectedUser={selectedUser}
						/>
					)}
				/>
			</Router>
		</div>
	);
}

export default App;
