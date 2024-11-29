import React from 'react';
import { Play, RotateCw } from 'lucide-react';

interface RestartButtonProps {
  onRestart: () => void;
  isFirstStart: boolean;
  isDarkMode: boolean;
}

export const RestartButton: React.FC<RestartButtonProps> = ({ 
  onRestart, 
  isFirstStart,
  isDarkMode 
}) => {
  const buttonClasses = `flex items-center justify-center gap-2 ${
    isDarkMode 
      ? 'bg-indigo-500 hover:bg-indigo-600' 
      : 'bg-indigo-600 hover:bg-indigo-700'
  } text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200`;

  return (
    <button onClick={onRestart} className={buttonClasses}>
      {isFirstStart ? (
        <>
          <Play size={20} />
          Start Session
        </>
      ) : (
        <>
          <RotateCw size={20} />
          Try Again
        </>
      )}
    </button>
  );
};