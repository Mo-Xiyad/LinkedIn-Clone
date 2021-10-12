import 'bootstrap/dist/css/bootstrap.min.css';
import './assats/css/profile_page css/profile_layout.css';
import './assats/css/profile_page css/HeaderIcons.css';
import './assats/css/profile_page css/Navbar.css';
import './assats/css/profile_page css/Melogo.css';
import './assats/css/home_page css/Feed.css';
import './assats/css/home_page css/Sidebar.css';
import './assats/css/home_page css/Widget.css';
import './assats/css/home_page css/Homepage.css';
import './assats/css/home_page css/Postinput.css';
import './assats/css/home_page css/Post.css';
import Navbar from './components/profile_page/Navbar';
import HomePage from './components/home_page/Homepage';
import InnerLayout from './components/profile_page/InnerLayout';

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <InnerLayout />; */}
			<HomePage />
		</div>
	);
}

export default App;
