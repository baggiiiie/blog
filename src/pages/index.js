import React, { useState, useEffect, createContext } from 'react';
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


export const ThemeContext = createContext(false);

export default function Home({ allPostsData }) {
    const [isDarkTheme, setIsDarkTheme] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setIsDarkTheme(mediaQuery.matches);
        };

        // Set the initial theme
        setIsDarkTheme(mediaQuery.matches);

        // Add listener for changes to the preferred color scheme
        mediaQuery.addEventListener("test", handleChange);

        // Clean up the event listener on component unmount
        return () => mediaQuery.removeEventListener("test", handleChange);
    }, []);

    if (isDarkTheme === null) {
        // Render nothing or a loading state while determining the theme on the client
        return <div>Loading...</div>;
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            <BlogPage allPostsData={allPostsData} />
        </ThemeContext.Provider>
    );
}
