import "bootstrap/dist/css/bootstrap.min.css";
import "./assats/css/profile_page css/Navbar.css";
import "./assats/css/profile_page css/HearedIcons.css";
import "./assats/css/profile_page css/profile_layout.css";
import Navbar from "./components/profile_page/Navbar";
import InnerLayout from "./components/profile_page/InnerLayout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InnerLayout />;
    </div>
  );
}

export default App;
