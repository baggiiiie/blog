import React from "react";
import Link from "next/link";

export default function BlogPage({ allPostsData }) {
	return (
		// page div
		<div className="pageBase">
			{/* display sheet div */}
			<div className="blogSheet">
				{/* header div */}
				<div className="py-5">
					<h1 className="blogHeader">My thoughts and gibberish</h1>
					<h2 className="belowHeader">This is your hackernews style blog</h2>
				</div>
				{/* content div */}
				{/* individual blog div */}

				{allPostsData.map(({ id, date, title }) => (
					<Link href={`/${id}`} key={id}>
						<div className="flex justify-between hover:underline hover:bg-blue-100 px-4 hover:cursor-pointer">
							<p className="">{title}</p>
							<p>{date}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
