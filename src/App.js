import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	const [mode, setMode] = useState("light");
	// Whether dark mode is enabled or not

	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#042743";
			showAlert("Dark Mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been enabled", "success");
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
			<Alert alert={alert} />
			<TextForm heading="Enter text in the area below" />
			{/* <About /> */}
		</div>
	);
}

export default App;
