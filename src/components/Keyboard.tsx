import React from 'react';
import { Key } from './Key';
import { KEYBOARD_ROWS } from '../data/keyboardData';
import { KeyboardLayout, KeyboardStyle, KeyboardState } from '../types/keyboard';

interface KeyboardProps {
  layout: KeyboardLayout;
  style: KeyboardStyle;
  keyboardState: KeyboardState;
  onKeyClick: (keyId: string) => void;
  isDarkMode: boolean;
  showFingerColors: boolean;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  layout,
  style,
  keyboardState,
  onKeyClick,
  isDarkMode,
  showFingerColors,
}) => {
  const containerClasses = `inline-block ${
    isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
  } p-4 rounded-xl shadow-lg`;

  const getRowWidth = (row: typeof KEYBOARD_ROWS[0]) => {
    const visibleKeys = row.filter(key => !key.variant || key.variant === style);
    return visibleKeys.reduce((total, key) => {
      const width = parseInt(key.width?.replace(/[^\d]/g, '') || '48'); // default width for w-12
      return total + width + 4; // 4px for margins (2px on each side)
    }, 0);
  };

  const maxRowWidth = Math.max(...KEYBOARD_ROWS.map(row => getRowWidth(row)));

  return (
    <div className={containerClasses}>
      <div className="flex flex-col gap-0.5" style={{ width: `${maxRowWidth}px` }}>
        {KEYBOARD_ROWS.filter(row => 
          row.some(key => !key.variant || key.variant === style)
        ).map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-between">
            {row.filter(key => !key.variant || key.variant === style)
              .map((keyData) => (
                <Key
                  key={keyData.id}
                  keyData={keyData}
                  keyState={keyboardState[keyData.id] || {
                    char: '',
                    isRevealed: false,
                    isCorrect: false,
                    isVisible: true
                  }}
                  layout={layout}
                  style={style}
                  onClick={() => onKeyClick(keyData.id)}
                  isDarkMode={isDarkMode}
                  showFingerColors={showFingerColors}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};