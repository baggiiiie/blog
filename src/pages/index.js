import { getSortedPostsData } from '../lib/posts';
import { BlogPage } from './blogdisplay';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
	<BlogPage allPostsData={ allPostsData }/>
  );
}
