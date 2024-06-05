import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggler = () => {
	const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

	const handleToggle = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	return (
		<button onClick={handleToggle} className='bg-blue-500'>
			{isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
		</button>
	);
};

export default ThemeToggler;