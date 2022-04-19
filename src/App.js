import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	const [mode, setMode] = useState("light");
	// Whether dark mode is enabled or not

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
		} else {
			setMode("light");
		}
	};
	return (
		<div className="main-container">
			<Navbar
				title="Text Utils"
				aboutText="About me"
				mode={mode}
				toggleMode={toggleMode}
			/>
			<TextForm heading="Enter text in the area below" />
			{/* <About /> */}
		</div>
	);
}

export default App;
