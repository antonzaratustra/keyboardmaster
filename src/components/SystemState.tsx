import React from 'react';
import { Type } from 'lucide-react';
import { useSystemKeyboardState } from '../hooks/useSystemKeyboardState';

interface SystemStateProps {
  isDarkMode: boolean;
}

export const SystemState: React.FC<SystemStateProps> = ({ isDarkMode }) => {
  const capsLock = useSystemKeyboardState();

  const stateClasses = `flex items-center gap-2 px-3 py-1.5 rounded-lg ${
    isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
  } shadow-sm ${capsLock ? 'text-indigo-500 font-medium' : ''}`;

  return (
    <div className={stateClasses}>
      <Type size={16} />
      <span className="text-sm">
        {capsLock ? 'CAPS' : 'caps'}
      </span>
    </div>
  );
};