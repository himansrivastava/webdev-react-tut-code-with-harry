import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
	return (
		<>
			<div>Hello this is {props.title}</div>
			<div>This is {props.aboutText}</div>
		</>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Default Title",
	aboutText: "Default About",
};
