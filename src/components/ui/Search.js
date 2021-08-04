import React, { useState } from "react";

const Search = ({ getQuery }) => {
	const [text, setText] = useState("");

	const onChange = (q) => {
		setText(q);
		getQuery(q);
	};

	return (
		<section style={{ marginBottom: "30px" }}>
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search Characters"
					value={text}
					onChange={(event) => onChange(event.target.value)}
					autofocus
				/>
			</form>
		</section>
	);
};

export default Search;
