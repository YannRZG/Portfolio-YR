import { useDarkMode } from "./DarkmodeContext";
import { FaSun, FaMoon } from 'react-icons/fa';
import { Switch } from '@headlessui/react';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-800 dark:text-gray-300 text-lg">
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </span>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`relative inline-flex items-center h-6 rounded-full w-11 ${isDarkMode ? 'bg-blue-600' : 'bg-green-400'}`}
      >
        <span
          className={`absolute left-1 inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            isDarkMode ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </Switch>
    </div>
  );
};

export default DarkModeToggle;
