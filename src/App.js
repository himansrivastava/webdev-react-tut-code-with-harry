import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	return (
		<div className="main-container">
			<h1>Himanshu</h1>
			<Navbar aboutText="The About Text" />
			<TextForm heading="Enter text in the area below" />
			{/* <About /> */}
		</div>
	);
}

export default App;
