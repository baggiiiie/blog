import React from "react";
import { getSortedPostsData } from "../lib/posts";
import BlogPage from "../components/blogFrontpage";

export async function getStaticProps() {
	const allPostsData = await getSortedPostsData();
	// const data = await allPostsData.json();
	return {
		props: {
			// data,
			allPostsData,
		},
	};
}
export default function Home({ allPostsData }) {
	return <BlogPage allPostsData={allPostsData} />;
}
