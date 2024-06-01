import React, { useContext } from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import BlogHeader from "./blogHeader";
import { ThemeContext } from "../pages";
import { Analytics } from "@vercel/analytics/react";

export default function BlogPage({ allPostsData }) {
	const isDarkTheme = useContext(ThemeContext);

	const header = "My thoughts and gibberish";
	// const belowHeader = "and some messy reading notes";
	const belowHeader = `${isDarkTheme ? 'dark' : 'light'}`;

	return (
		// page div
		<div className={`pageBase ${isDarkTheme ? 'pageBase_night' : ''}`}>
			<div className={`blogSheet ${isDarkTheme ? 'blogSheet_night' : ''} `}>
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
	const isDarkTheme = useContext(ThemeContext)

	return (
		<Link href={`/${id}`} key={id}>
			<div className={`blogListItem group ${ isDarkTheme ? 'blogListItem_night':''}`} >

				<p className="inline-block float-left group-hover:underline">{title}</p>
				<p className="inline-block float-right text-right group-hover:underline">
					{format(parseISO(date), "MMM dd, yyyy")}
				</p>
			</div>
		</Link>
	);
}
