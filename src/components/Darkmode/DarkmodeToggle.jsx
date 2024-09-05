import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Switch } from '@headlessui/react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-800 dark:text-gray-300 text-lg">
        {darkMode ? <FaMoon /> : <FaSun />}
      </span>
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        className={`relative inline-flex items-center h-6 rounded-full w-11 ${darkMode ? 'bg-blue-600' : 'bg-green-400'}`}
      >
        <span
          className={`absolute left-1 inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            darkMode ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </Switch>
    </div>
  );
};

export default DarkModeToggle;
