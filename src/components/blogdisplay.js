import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function BlogPage({ allPostsData }) {
	return (
		// page div
		<div className="pageBase">
			<div className="blogSheet">
				<div className="blogHeader">
					<h1>My thoughts and gibberish</h1>
					<h2>This is your hackernews style blog</h2>
				</div>

				{allPostsData.map(({ id, date, title }) => (
					<Link href={`/${id}`} key={id}>
						<div className="blogListItem">
							<h3 className="inline-block float-left">{title}</h3>
							<h3 className="inline-block float-right text-right">
								{format(parseISO(date), "MMM dd, yyyy")}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
