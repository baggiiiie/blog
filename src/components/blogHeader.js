import React from "react";

export default function BlogHeader({ header, belowHeader }) {
	return (
		<div className="blogHeader">
			<h1>{header}</h1>
			<h2>{belowHeader}</h2>
		</div>
	);
}
