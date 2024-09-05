import { Switch } from '@headlessui/react';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <span className="text-gray-800 dark:text-gray-300">
              {language === 'en' ? "EN" : "FR"}
            </span>
            <Switch
              checked={language === 'en'}
              onChange={toggleLanguage}
              className={`relative inline-flex items-center h-6 rounded-full w-11 ml-4 ${language === 'en' ? 'bg-blue-600' : 'bg-green-400'}`}
            >
              <span
                className={`absolute left-1 inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  language === 'en' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
        </div>
    );
}

export default LanguageToggle;
