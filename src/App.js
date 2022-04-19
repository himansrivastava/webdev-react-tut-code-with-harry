import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	// Whether dark mode is enabled or not
	return (
		<div className="main-container">
			<Navbar aboutText="About me" mode={darkMode} />
			<TextForm heading="Enter text in the area below" />
			{/* <About /> */}
		</div>
	);
}

export default App;
