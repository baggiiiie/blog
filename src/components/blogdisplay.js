import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import BlogHeader from "./blogHeader";

export default function BlogPage({ allPostsData }) {
	const header = "My thoughts and gibberish";
	const belowHeader = "This is your hackernews style blog";
	return (
		// page div
		<div className="pageBase">
			<div className="blogSheet">
				<BlogHeader header={header} belowHeader={belowHeader} />

				{allPostsData.map(({ id, date, title }) => (
					<BlogItem id={id} date={date} title={title} />
				))}
			</div>
		</div>
	);
}

export function BlogItem({ id, title, date }) {
	return (
		<Link href={`/${id}`} key={id}>
			<div className="blogListItem">
				<h3 className="inline-block float-left">{title}</h3>
				<h3 className="inline-block float-right text-right">
					{format(parseISO(date), "MMM dd, yyyy")}
				</h3>
			</div>
		</Link>
	);
}
