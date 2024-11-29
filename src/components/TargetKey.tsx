import React from 'react';
import { KeyData } from '../types/keyboard';

interface TargetKeyProps {
  targetKey: KeyData | null;
  layout: 'en' | 'ru';
  isDarkMode: boolean;
}

export const TargetKey: React.FC<TargetKeyProps> = ({ targetKey, layout, isDarkMode }) => {
  if (!targetKey) return null;

  const containerClasses = `${
    isDarkMode ? 'bg-gray-800' : 'bg-white'
  } p-4 rounded-lg shadow-md mb-8 text-center`;

  const titleClasses = `text-lg font-medium ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  } mb-2`;

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>Find this key:</h2>
      <div className="text-3xl font-bold text-indigo-600">
        {targetKey.chars[layout]}
      </div>
    </div>
  );
};