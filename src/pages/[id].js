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
		<div className="pageBase">
			<Head>
				<title>{postData.title}</title>
			</Head>
			<div className="blogSheet">
				<div className="py-5">
					<h1 className="blogHeader">{postData.title}</h1>
					<h2 className="belowHeader">{postData.date}</h2>
				</div>
				<div
					className="text-left"
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</div>
		</div>
	);
};

export default Post;
