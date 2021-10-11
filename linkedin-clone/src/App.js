import 'bootstrap/dist/css/bootstrap.min.css';
import './assats/css/profile_page css/profile_layout.css';
import './assats/css/profile_page css/HeaderIcons.css';
import './assats/css/profile_page css/Navbar.css';
import Navbar from './components/profile_page/Navbar';
import Head from './components/profile_page/Head';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Head />;
		</div>
	);
}

export default App;
