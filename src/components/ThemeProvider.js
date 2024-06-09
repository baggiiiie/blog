import React, { useState, useEffect, createContext, useContext } from 'react';

export const ThemeContext = createContext(false);

export function themeClassHelper( classname, isDarkTheme ) {
	// const isDarkTheme = useContext(ThemeContext)
	const className = `${classname}` + (`${isDarkTheme}` ? "_night" : "")

	// console.log(className)
	return className
}

export const ThemeProviderV2 = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setIsDarkTheme(mediaQuery.matches);
        };

        // Set the initial theme
        setIsDarkTheme(mediaQuery.matches);

        // Add listener for changes to the preferred color scheme
        mediaQuery.addEventListener("change", handleChange);

        // Clean up the event listener on component unmount
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    if (isDarkTheme === null) {
        // Render nothing or a loading state while determining the theme on the client
        return <div>Loading...</div>;
    }
	console.log("isDarkTheme: " + isDarkTheme)

    return isDarkTheme;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setIsDarkTheme(mediaQuery.matches);
        };

        // Set the initial theme
        setIsDarkTheme(mediaQuery.matches);

        // Add listener for changes to the preferred color scheme
        mediaQuery.addEventListener("change", handleChange);

        // Clean up the event listener on component unmount
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    if (isDarkTheme === null) {
        // Render nothing or a loading state while determining the theme on the client
        return <div>Loading...</div>;
    }
	console.log("From ThemeProvider: isDarkTheme=" + isDarkTheme)

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
