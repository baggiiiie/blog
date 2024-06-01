// pages/index.js
import React from 'react';
import { getSortedPostsData } from "../lib/posts";
import BlogPage from "../components/blogFrontpage";

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <div >
            <BlogPage allPostsData={allPostsData} />
        </div>
    );
}
