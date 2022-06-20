import React, { useEffect, useState } from "react";
import axios from "axios";

function Maintenance() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState({ firstName: "", lastName: "" });

	// set the document title using the useEffect hook
	useEffect(() => {
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			Maintenance
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Count {count}
			</button>
			<form>
				<input
					type="text"
					value={name.firstName}
					onChange={(e) =>
						setName({ ...name, firstName: e.target.value })
					}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) =>
						setName({ ...name, lastName: e.target.value })
					}
				/>
				<h2>First Name: {name.firstName}</h2>
				<h2>Last Name: {name.lastName}</h2>
			</form>
		</div>
	);
}

export default Maintenance;
