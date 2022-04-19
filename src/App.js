import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	return (
		<div className="main-container">
			<h1>Himanshu</h1>
			<Navbar aboutText="The About Text" />
			<div className="container">
				<TextForm heading="Enter a text to analyse" />
			</div>
		</div>
	);
}

export default App;
