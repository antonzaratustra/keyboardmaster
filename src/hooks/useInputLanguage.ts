import { useState, useEffect } from 'react';

export const useInputLanguage = () => {
  const [inputLanguage, setInputLanguage] = useState('en');
  const [isWrongLayout, setIsWrongLayout] = useState(false);

  useEffect(() => {
    const detectLanguage = (event: KeyboardEvent) => {
      // Ignore modifier keys and non-character keys
      if (event.altKey || event.ctrlKey || event.metaKey || event.key.length > 1) {
        return;
      }

      const key = event.key;
      // Check if the key is a letter
      if (key.match(/[a-zа-яё]/i)) {
        const isRussian = /[а-яё]/i.test(key);
        setInputLanguage(isRussian ? 'ru' : 'en');
      }
    };

    window.addEventListener('keydown', detectLanguage);
    return () => {
      window.removeEventListener('keydown', detectLanguage);
    };
  }, []); // Empty dependency array to run only once

  return { inputLanguage, isWrongLayout, setIsWrongLayout };
}; 