import React, { useState, useEffect, createContext, useContext  } from 'react';
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

let isBrowser = typeof window !== 'undefined'; // Check if window is defined

export const ThemeContext = createContext(null);


export default function Home({ allPostsData }) {
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

	function getInitialTheme() {
		if (!isBrowser) {
		  // Handle SSR or initial state based on server data
		  return false; // For example, default to light theme during SSR
		}
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	  
	}
  
	useEffect(() => {
	  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	  const handleChange = () => {
		setIsDarkTheme(mediaQuery.matches);
	  };
  
	  // Add listener for changes to the preferred color scheme
	  mediaQuery.addEventListener('change', handleChange);
  
	  // Clean up the event listener on component unmount
	  return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);
  

	return (
		<>
		    <ThemeContext.Provider value={isDarkTheme}>
				<BlogPage allPostsData={allPostsData} />
			</ThemeContext.Provider >
		</>
	);
}
