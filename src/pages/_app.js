import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import '../global.css';

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
