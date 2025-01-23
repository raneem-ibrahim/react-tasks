import React, { useState } from 'react';
import '../day2/css/style.css'; // Make sure to create and import a CSS file for styling

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
      <p>This is a {isDarkTheme ? 'dark' : 'light'} themed component!</p>
    </div>
  );
};

export default ThemeToggle;