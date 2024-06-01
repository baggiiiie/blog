import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import BlogHeader from "./blogHeader";
import { Analytics } from "@vercel/analytics/react";
import { themeClassHelper } from "./ThemeProvider";


export default function BlogPage({ allPostsData }) {
	const header = "My thoughts and gibberish";
	const belowHeader = "and some messy reading notes";

	return (
		// page div
		<div className={themeClassHelper("pageBase")}>
			<div className={themeClassHelper("blogSheet")}>
				<BlogHeader header={header} belowHeader={belowHeader} />

				{allPostsData.map(({ id, date, title }) => (
					<BlogItem id={id} date={date} title={title} key={id}/>
				))}

			</div>
			<Analytics />
		</div>
	);
}

export function BlogItem({ id, title, date }) {
	return (
		<Link href={`/${id}`} key={id}>
			<div className={`${themeClassHelper("blogListItem")} group`} >
				<p className="inline-block float-left group-hover:underline">{title}</p>
				<p className="inline-block float-right text-right group-hover:underline">
					{format(parseISO(date), "MMM dd, yyyy")}
				</p>
			</div>
		</Link>
	);
}
