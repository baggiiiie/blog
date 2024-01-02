import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function BlogPage({ allPostsData }) {
	return (
		// page div
		<div className="pageBase">
			<div className="blogSheet">
				<div className="blogHeader">
					<h1 className="blogTitle">My thoughts and gibberish</h1>
					<h2 className="belowTitle">This is your hackernews style blog</h2>
				</div>

				{allPostsData.map(({ id, date, title }) => (
					<Link href={`/${id}`} key={id}>
						<div className="blogListItem">
							<p>{title}</p>
							<div className="text-right">
								{format(parseISO(date), "MMM dd, yyyy")}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
