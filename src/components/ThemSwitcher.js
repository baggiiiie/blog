import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<button
			onClick={toggleDarkMode}
			className="border-gray-300 border rounded-full fixed right-10 bottom-10"
		>
			{darkMode ? "light" : "dark"}
		</button>
	);
}
