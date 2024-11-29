import React from 'react';
import { Keyboard } from 'lucide-react';

interface InputLanguageIndicatorProps {
  inputLanguage: string;
  isWrongLayout: boolean;
  isDarkMode: boolean;
}

export const InputLanguageIndicator: React.FC<InputLanguageIndicatorProps> = ({
  inputLanguage,
  isWrongLayout,
  isDarkMode,
}) => {
  const baseClasses = `flex items-center gap-2 px-3 py-1.5 rounded-lg ${
    isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
  } shadow-sm`;

  const warningClasses = isWrongLayout 
    ? 'animate-pulse bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' 
    : '';

  return (
    <div className={`${baseClasses} ${warningClasses}`}>
      <Keyboard size={16} />
      <span className="text-sm font-medium">
        {inputLanguage.toUpperCase()}
      </span>
    </div>
  );
}; 