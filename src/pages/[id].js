import React from "react";
import { getAllPostIds } from "../lib/posts";
import { getPostData } from "../lib/posts";
import Head from "next/head";

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

const Post = ({ postData }) => {
	return (
		<div>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<h1>{postData.title}</h1>

			<br />
			{postData.id}
			<br />
			{postData.date}
			{/* Add your content here */}
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</div>
	);
};

export default Post;
