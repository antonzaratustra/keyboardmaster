import React from 'react';
import { KeyData, KeyState } from '../types/keyboard';

interface KeyProps {
  keyData: KeyData;
  keyState: KeyState;
  layout: 'en' | 'ru';
  style: 'macbook' | 'windows';
  onClick: () => void;
  isDarkMode: boolean;
  showFingerColors: boolean;
}

const getFingerColorClass = (fingerColor: string | null, isDarkMode: boolean): string => {
  const colorMap: Record<string, string> = {
    'left-pinky': isDarkMode ? 'border-pink-700' : 'border-pink-400',
    'left-ring': isDarkMode ? 'border-purple-700' : 'border-purple-400',
    'left-middle': isDarkMode ? 'border-blue-700' : 'border-blue-400',
    'left-index': isDarkMode ? 'border-green-700' : 'border-green-400',
    'right-index': isDarkMode ? 'border-yellow-700' : 'border-yellow-400',
    'right-middle': isDarkMode ? 'border-orange-700' : 'border-orange-400',
    'right-ring': isDarkMode ? 'border-red-700' : 'border-red-400',
    'right-pinky': isDarkMode ? 'border-rose-700' : 'border-rose-400',
    'thumbs': isDarkMode ? 'border-gray-700' : 'border-gray-400'
  };

  return fingerColor ? `border-2 ${colorMap[fingerColor]}` : '';
};

export const Key: React.FC<KeyProps> = ({
  keyData,
  keyState,
  layout,
  style,
  onClick,
  isDarkMode,
  showFingerColors,
}) => {
  const baseClasses = 'm-0.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center select-none';
  const widthClass = keyData.width || 'w-12';
  const heightClass = 'h-12';
  
  const getStateClasses = () => {
    const darkModeClasses = isDarkMode
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
      : 'bg-gray-100 hover:bg-gray-200 text-gray-900';

    if (keyState.isRevealed) {
      if (keyState.isCorrect) {
        return isDarkMode
          ? 'bg-green-700 text-white cursor-default'
          : 'bg-green-500 text-white cursor-default';
      }
      return isDarkMode
        ? 'bg-red-700 text-white cursor-default'
        : 'bg-red-500 text-white cursor-default';
    }

    const isHomeKey = (layout === 'en' && keyData.chars.en === keyData.chars[layout] && ['F', 'J'].includes(keyData.chars[layout])) ||
                     (layout === 'ru' && keyData.chars.ru === keyData.chars[layout] && ['А', 'О'].includes(keyData.chars[layout]));

    if (isHomeKey) {
      return `${darkModeClasses} cursor-default border-b-2 border-indigo-500`;
    }

    if (!keyState.isVisible) {
      return `${darkModeClasses} cursor-pointer`;
    }

    return `${darkModeClasses} cursor-default`;
  };

  const styleSpecificClasses = style === 'macbook'
    ? 'shadow-sm hover:shadow-md'
    : '';

  const textSizeClass = keyData.id.match(/(Shift|Control|Command|Option|Enter|Backspace|Win|Alt|Tab|CapsLock|Fn)/)
    ? 'text-xs'
    : 'text-base';

  const fingerColorClass = showFingerColors && keyData.fingerColor 
    ? getFingerColorClass(keyData.fingerColor, isDarkMode) 
    : '';

  if (keyData.id === 'ArrowContainer') {
    return (
      <div className={`${baseClasses} ${widthClass} h-12 flex flex-col gap-0.5`}>
        <button
          className={`${baseClasses} w-full h-[23px] rounded-md ${getStateClasses()} ${styleSpecificClasses} ${textSizeClass} ${fingerColorClass}`}
          onClick={onClick}
          disabled={!keyState.isVisible || keyState.isRevealed}
        >
          ↑
        </button>
        <button
          className={`${baseClasses} w-full h-[23px] rounded-md ${getStateClasses()} ${styleSpecificClasses} ${textSizeClass} ${fingerColorClass}`}
          onClick={onClick}
          disabled={!keyState.isVisible || keyState.isRevealed}
        >
          ↓
        </button>
      </div>
    );
  }

  return (
    <button
      className={`${baseClasses} ${widthClass} ${heightClass} ${getStateClasses()} ${styleSpecificClasses} ${textSizeClass} ${fingerColorClass}`}
      onClick={() => onClick()}
      disabled={keyState.isRevealed}
    >
      {!keyState.isVisible
        ? (keyState.isRevealed ? keyData.chars[layout] : '?')
        : (keyData.displayText?.[layout] || keyData.chars[layout] || ' ')}
    </button>
  );
};