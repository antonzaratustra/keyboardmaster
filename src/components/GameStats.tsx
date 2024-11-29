import React from 'react';
import { Trophy, XCircle } from 'lucide-react';
import { KeyboardLayout } from '../types/keyboard';

interface GameStatsProps {
  correctGuesses: number;
  totalGuesses: number;
  wrongGuesses: string[];
  layout: KeyboardLayout;
  isDarkMode: boolean;
}

export const GameStats: React.FC<GameStatsProps> = ({
  correctGuesses,
  totalGuesses,
  wrongGuesses,
  isDarkMode,
}) => {
  const accuracy = totalGuesses > 0 
    ? Math.round((correctGuesses / totalGuesses) * 100) 
    : 0;

  const containerClasses = `${
    isDarkMode ? 'bg-gray-800' : 'bg-white'
  } p-6 rounded-lg shadow-md`;

  const statBlockClasses = `${
    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
  } p-3 rounded`;

  const textClasses = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={containerClasses}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Trophy className="text-yellow-500" size={24} />
          <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Session Stats
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-indigo-600">{accuracy}%</div>
          <div className={`text-sm ${textClasses}`}>Accuracy</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className={statBlockClasses}>
          <div className="text-xl font-semibold text-green-600">{correctGuesses}</div>
          <div className={`text-sm ${textClasses}`}>Correct</div>
        </div>
        <div className={statBlockClasses}>
          <div className="text-xl font-semibold text-red-600">{totalGuesses - correctGuesses}</div>
          <div className={`text-sm ${textClasses}`}>Wrong</div>
        </div>
      </div>

      {wrongGuesses.length > 0 && (
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <XCircle className="text-red-500" size={16} />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Mistakes
            </span>
          </div>
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
            {wrongGuesses.map((guess, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${
                  isDarkMode ? 'bg-red-900 text-red-100' : 'bg-red-50 text-red-700'
                } rounded text-sm`}
              >
                {guess}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};