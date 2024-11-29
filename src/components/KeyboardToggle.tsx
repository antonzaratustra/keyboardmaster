import React from 'react';

interface KeyboardToggleProps {
  isVisible: boolean;
  onToggle: () => void;
  isDarkMode: boolean;
}

export const KeyboardToggle: React.FC<KeyboardToggleProps> = ({ isVisible, onToggle, isDarkMode }) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg transition-colors ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
          : 'bg-white hover:bg-gray-100 text-gray-700'
      }`}
      title={isVisible ? "Hide Keyboard" : "Show Keyboard"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isVisible ? (
          // Keyboard icon
          <>
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
            <path d="M6 8h.01"/>
            <path d="M10 8h.01"/>
            <path d="M14 8h.01"/>
            <path d="M18 8h.01"/>
            <path d="M6 12h.01"/>
            <path d="M10 12h.01"/>
            <path d="M14 12h.01"/>
            <path d="M18 12h.01"/>
            <path d="M6 16h12"/>
          </>
        ) : (
          // Eye icon
          <>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </>
        )}
      </svg>
    </button>
  );
}; 