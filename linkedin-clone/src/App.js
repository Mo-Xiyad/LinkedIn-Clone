import 'bootstrap/dist/css/bootstrap.min.css';
import './assats/css/profile_page css/profile_layout.css';
import './assats/css/profile_page css/HeaderIcons.css';
import './assats/css/profile_page css/Navbar.css';
import './assats/css/home_page css/Feed.css';
import './assats/css/home_page css/Sidebar.css';
import './assats/css/home_page css/Widget.css';
import './assats/css/home_page css/Homepage.css';
import Navbar from './components/profile_page/Navbar';
import Head from './components/profile_page/Head';
import HomePage from './components/home_page/Homepage';

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Head />; */}
			<HomePage />
		</div>
	);
}

export default App;
