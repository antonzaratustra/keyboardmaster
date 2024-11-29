import React from 'react';
import { KeyboardLayout, KeyboardStyle } from '../types/keyboard';
import { Keyboard as KeyboardIcon, Monitor } from 'lucide-react';

interface ControlsProps {
  layout: KeyboardLayout;
  style: KeyboardStyle;
  onLayoutChange: (layout: KeyboardLayout) => void;
  onStyleChange: (style: KeyboardStyle) => void;
  isDarkMode: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  layout,
  style,
  onLayoutChange,
  onStyleChange,
  isDarkMode,
}) => {
  const selectClasses = `${
    isDarkMode 
      ? 'bg-gray-800 border-gray-700 text-white' 
      : 'bg-white border-gray-300 text-gray-900'
  } border rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`;

  const iconClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <div className="flex items-center space-x-2">
        <KeyboardIcon size={20} className={iconClass} />
        <select
          value={layout}
          onChange={(e) => onLayoutChange(e.target.value as KeyboardLayout)}
          className={selectClasses}
        >
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <Monitor size={20} className={iconClass} />
        <select
          value={style}
          onChange={(e) => onStyleChange(e.target.value as KeyboardStyle)}
          className={selectClasses}
        >
          <option value="macbook">MacBook</option>
          <option value="windows">Windows</option>
        </select>
      </div>
    </div>
  );
};