import React from 'react';
import { Hand } from 'lucide-react';

interface FingerColorToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
  isDarkMode: boolean;
}

export const FingerColorToggle: React.FC<FingerColorToggleProps> = ({
  isEnabled,
  onToggle,
  isDarkMode,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDarkMode 
          ? `${isEnabled ? 'bg-indigo-600' : 'bg-gray-800'} hover:bg-gray-700 text-white` 
          : `${isEnabled ? 'bg-indigo-100' : 'bg-white'} hover:bg-gray-100 text-gray-600 shadow-sm`
      }`}
      aria-label={isEnabled ? 'Hide finger colors' : 'Show finger colors'}
    >
      <Hand size={20} />
    </button>
  );
};