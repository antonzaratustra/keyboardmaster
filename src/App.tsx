import React, { useState, useCallback, useEffect } from 'react';
import { Controls } from './components/Controls';
import { Keyboard } from './components/Keyboard';
import { GameStats } from './components/GameStats';
import { TargetKey } from './components/TargetKey';
import { RestartButton } from './components/RestartButton';
import { ThemeToggle } from './components/ThemeToggle';
import { SystemState } from './components/SystemState';
import { FingerColorToggle } from './components/FingerColorToggle';
import { KeyboardLayout, KeyboardStyle, KeyboardState, KeyData } from './types/keyboard';
import { KEYBOARD_ROWS } from './data/keyboardData';
import { useKeyboardInput } from './hooks/useKeyboardInput';
import { InputLanguageIndicator } from './components/InputLanguageIndicator';
import { useInputLanguage } from './hooks/useInputLanguage';
import { KeyboardToggle } from './components/KeyboardToggle';
import { TimedBorder } from './components/TimedBorder';

const KEY_GUESS_TIMEOUT = 5000; // 5 seconds in milliseconds

const App: React.FC = () => {
  const [layout, setLayout] = useState<KeyboardLayout>('en');
  const [style, setStyle] = useState<KeyboardStyle>('macbook');
  const [keyboardState, setKeyboardState] = useState<KeyboardState>({});
  const [targetKey, setTargetKey] = useState<KeyData | null>(null);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFirstStart, setIsFirstStart] = useState(true);
  const [guessedKeys] = useState(new Set<string>());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showFingerColors, setShowFingerColors] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);
  const { inputLanguage, isWrongLayout, setIsWrongLayout } = useInputLanguage();

  const initializeKeyboardState = useCallback(() => {
    const newState: KeyboardState = {};

    KEYBOARD_ROWS.forEach(row => {
      row.forEach(key => {
        if (key.variant && key.variant !== style) return;
        
        const isHomeKey = (layout === 'en' && ['F', 'J'].includes(key.chars[layout])) ||
                         (layout === 'ru' && ['А', 'О'].includes(key.chars[layout]));

        const shouldBeHidden = !isHomeKey && 
                             key.chars[layout].match(/^[a-zA-Z0-9а-яА-ЯёЁ\[\]\\\-=;',.\/`]$/);
        
        newState[key.id] = {
          char: key.chars[layout],
          isRevealed: isHomeKey,
          isCorrect: isHomeKey,
          isVisible: !shouldBeHidden
        };
      });
    });

    return newState;
  }, [layout, style]);

  const getUnrevealedKey = useCallback(() => {
    console.log('Getting unrevealed key, current state:', {
      keyboardState,
      layout,
      style
    });

    const availableKeys = KEYBOARD_ROWS.flat().filter(key => {
      if (key.variant && key.variant !== style) {
        return false;
      }

      const keyState = keyboardState[key.id];
      if (!keyState) {
        console.log('No state for key:', key.id);
        return false;
      }

      const isLetter = key.chars[layout].match(/^[a-zA-Zа-яА-ЯёЁ]$/);
      const isNumber = key.chars[layout].match(/^[0-9]$/);
      const isSpecialChar = key.chars[layout].match(/^[\[\]\\\-=;',.\/`]$/);
      
      const shouldInclude = (isLetter || isNumber || isSpecialChar) && 
                           !keyState.isVisible && 
                           !keyState.isRevealed;

      console.log('Key check:', {
        keyId: key.id,
        char: key.chars[layout],
        isLetter,
        isNumber,
        isSpecialChar,
        isVisible: keyState.isVisible,
        isRevealed: keyState.isRevealed,
        shouldInclude
      });

      return shouldInclude;
    });

    console.log('Available keys:', availableKeys);

    if (availableKeys.length === 0) {
      setIsComplete(true);
      return null;
    }

    return availableKeys[Math.floor(Math.random() * availableKeys.length)];
  }, [keyboardState, layout, style]);

  const processNextKey = useCallback(() => {
    const nextKey = getUnrevealedKey();
    if (nextKey) {
      setTargetKey(nextKey);
      return true;
    } else {
      setIsComplete(true);
      return false;
    }
  }, [getUnrevealedKey]);

  const handleKeyClick = useCallback((keyId: string) => {
    if (!targetKey || isComplete) return;

    const isInputMatchingLayout = (
      (layout === 'en' && inputLanguage === 'en') ||
      (layout === 'ru' && inputLanguage === 'ru')
    );

    if (!isInputMatchingLayout) {
      setIsWrongLayout(true);
      return;
    }

    const keyState = keyboardState[keyId];
    if (!keyState || keyState.isRevealed) return;

    const isCorrect = keyId === targetKey.id;
    
    if (isCorrect) {
      setKeyboardState(prev => ({
        ...prev,
        [keyId]: {
          ...prev[keyId],
          isRevealed: true,
          isCorrect: true
        }
      }));
      setCorrectGuesses(prev => prev + 1);
      guessedKeys.add(keyId);
      processNextKey();
    } else {
      setKeyboardState(prev => ({
        ...prev,
        [keyId]: {
          ...prev[keyId],
          isRevealed: true,
          isCorrect: false
        },
        [targetKey.id]: {
          ...prev[targetKey.id],
          isRevealed: true,
          isCorrect: false
        }
      }));
      setWrongGuesses(prev => [...prev, keyboardState[keyId].char, keyboardState[targetKey.id].char]);
    }
  }, [targetKey, isComplete, layout, inputLanguage, keyboardState, guessedKeys, processNextKey]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignore modifier keys
    if (event.altKey || event.ctrlKey || event.metaKey || event.key.length > 1) {
      return;
    }

    if (isComplete || !targetKey) return;

    // Check layout mismatch first, before any other logic
    const pressedKey = event.key;
    const isRussianKey = /[а-яё]/i.test(pressedKey);
    const currentInputLang = isRussianKey ? 'ru' : 'en';
    
    if (currentInputLang !== layout) {
      setIsWrongLayout(true);
      return;
    }

    setIsWrongLayout(false);
    
    const upperPressedKey = pressedKey.toUpperCase();
    const matchingKey = KEYBOARD_ROWS.flat().find(key => 
      key.chars[layout].toUpperCase() === upperPressedKey
    );
    
    if (matchingKey) {
      handleKeyClick(matchingKey.id);
    }
  }, [isComplete, targetKey, layout, handleKeyClick]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleRestart = useCallback(() => {
    const newState = initializeKeyboardState();
    setKeyboardState(newState);
    const firstKey = getUnrevealedKey();
    setTargetKey(firstKey);
    setCorrectGuesses(0);
    setWrongGuesses([]);
    setIsComplete(false);
    setIsFirstStart(false);
    guessedKeys.clear();
  }, [initializeKeyboardState, getUnrevealedKey]);

  const handleLayoutChange = (newLayout: KeyboardLayout) => {
    setLayout(newLayout);
    localStorage.setItem('selectedLayout', newLayout);
    setKeyboardState(initializeKeyboardState());
    setTargetKey(null);
    setCorrectGuesses(0);
    setWrongGuesses([]);
    setIsComplete(false);
    setIsFirstStart(true);
    guessedKeys.clear();
  };

  const handleStyleChange = (newStyle: KeyboardStyle) => {
    setStyle(newStyle);
    setKeyboardState(initializeKeyboardState());
    setTargetKey(null);
    setCorrectGuesses(0);
    setWrongGuesses([]);
    setIsComplete(false);
    setIsFirstStart(true);
    guessedKeys.clear();
  };

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      setKeyboardState(initializeKeyboardState());
      setIsInitialized(true);
      setIsFirstStart(true);
    }
  }, [isInitialized, initializeKeyboardState]);

  useKeyboardInput(handleKeyClick, layout);

  const handleTimeout = useCallback(() => {
    if (!targetKey || isComplete) return;

    setKeyboardState(prev => ({
      ...prev,
      [targetKey.id]: {
        ...prev[targetKey.id],
        isRevealed: true,
        isCorrect: false
      }
    }));

    setWrongGuesses(prev => [...prev, keyboardState[targetKey.id].char]);
    processNextKey();
  }, [targetKey, isComplete, keyboardState, processNextKey]);

  return (
    <div className={`min-h-screen py-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-4">
            <SystemState isDarkMode={isDarkMode} />
            <InputLanguageIndicator 
              inputLanguage={inputLanguage}
              isWrongLayout={isWrongLayout}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className="flex gap-2">
            <FingerColorToggle
              isEnabled={showFingerColors}
              onToggle={() => setShowFingerColors(prev => !prev)}
              isDarkMode={isDarkMode}
            />
            <KeyboardToggle
              isVisible={isKeyboardVisible}
              onToggle={() => setIsKeyboardVisible(prev => !prev)}
              isDarkMode={isDarkMode}
            />
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Keyboard Master
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Learn keyboard layouts through interactive practice
          </p>
        </div>

        <div className="mb-8">
          <Controls
            layout={layout}
            style={style}
            onLayoutChange={handleLayoutChange}
            onStyleChange={handleStyleChange}
            isDarkMode={isDarkMode}
          />
        </div>

        <div className="flex flex-col items-center mb-8">
          {isFirstStart ? (
            <RestartButton 
              onRestart={handleRestart} 
              isFirstStart={true}
              isDarkMode={isDarkMode}
            />
          ) : !isComplete ? (
            <TimedBorder
              key={targetKey?.id}
              isActive={!isComplete && !!targetKey}
              duration={KEY_GUESS_TIMEOUT}
              onTimeout={handleTimeout}
              isDarkMode={isDarkMode}
            >
              <TargetKey 
                targetKey={targetKey} 
                layout={layout} 
                isDarkMode={isDarkMode} 
              />
            </TimedBorder>
          ) : (
            <RestartButton 
              onRestart={handleRestart} 
              isFirstStart={false}
              isDarkMode={isDarkMode}
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {isKeyboardVisible && (
            <div className="flex-1 flex justify-center">
              <Keyboard
                layout={layout}
                style={style}
                keyboardState={keyboardState}
                onKeyClick={handleKeyClick}
                isDarkMode={isDarkMode}
                showFingerColors={showFingerColors}
              />
            </div>
          )}
          <div className="w-full lg:w-80">
            <GameStats
              correctGuesses={correctGuesses}
              totalGuesses={correctGuesses + wrongGuesses.length}
              wrongGuesses={wrongGuesses}
              layout={layout}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;