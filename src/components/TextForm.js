import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		// console.log("UpClick");
		let newText = text.toLocaleUpperCase();
		setText(newText);
	};

	const handleLowClick = () => {
		let newText = text.toLocaleLowerCase();
		setText(newText);
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const [text, setText] = useState("");
	// text = "New Text"; wrong way to change a state
	// State should be changed only by using the function setText
	// as defined using the useState.

	return (
		<div>
			<>
				<div className="container">
					<h1>{props.heading}</h1>
					<label htmlFor="id_textArea"></label>
					<textarea
						name="textArea"
						id="id_textArea"
						className="form-control"
						rows="10"
						placeholder="Enter Text Here"
						value={text}
						onChange={handleOnChange}
					></textarea>
					<br />
					<button className="btn btn-primary" onClick={handleUpClick}>
						Convert to Uppercase
					</button>
					<button
						className="btn btn-primary mx-2"
						onClick={handleLowClick}
					>
						Convert to Lowercase
					</button>
				</div>
				<div className="container">
					<h2>Your Text Summary</h2>
					<p>
						{text.trim().split(" ").length} words and {text.length}{" "}
						characters{" "}
					</p>
					<p>{0.008 * text.trim().split(" ").length} Minutes read</p>
					<h2>Preview</h2>
					<p>{text} </p>
				</div>
			</>
		</div>
	);
}
