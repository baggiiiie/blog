import React from "react";
import { getAllPostIds } from "../lib/posts";
import { getPostData } from "../lib/posts";
import Head from "next/head";
import BlogHeader from "../components/blogHeader";
import { themeClassHelper } from "../components/ThemeProvider";

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
		<div className={themeClassHelper("pageBase")}>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<div className={themeClassHelper("blogSheet")}>
				<BlogHeader header={postData.title} belowHeader={postData.date} />
				<div
					className="prose"
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
				<PostButtom />
			</div>
		</div>
	);
};

const PostButtom = () => {
	return (
		<div>
			<div className="blogBottom">
				<div>
					<p>
						Route your ideas&nbsp;
						<a
							href="mailto:yingchao.dai22@gmail.com"
							className="underline"
						>to my inbox</a>
						.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Post;
