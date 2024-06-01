import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import BlogHeader from "./blogHeader";
import { Analytics } from "@vercel/analytics/react";

export default function BlogPage({ allPostsData, isDarkTheme}) {
	const header = "My thoughts and gibberish";
	const belowHeader = "and some messy reading notes";
	return (
		// page div
		<div className={`pageBase ${isDarkTheme ? 'pageBase_night' : ''}`}>
			<div className={`blogSheet ${isDarkTheme ? 'blogSheet_night' : ''} `}>
				<BlogHeader header={header} belowHeader={belowHeader} />

				{allPostsData.map(({ id, date, title }) => (
					<BlogItem id={id} date={date} title={title} />
				))}

			</div>
			<Analytics />
		</div>
	);
}

export function BlogItem({ id, title, date }) {
	return (
		<Link href={`/${id}`} key={id}>
				<div className={`blogListItem group ${ true ? 'blogListItem_night':''}`} >

				<p className="inline-block float-left group-hover:underline">{title}</p>
				<p className="inline-block float-right text-right group-hover:underline">
					{format(parseISO(date), "MMM dd, yyyy")}
				</p>
			</div>
		</Link>
	);
}
