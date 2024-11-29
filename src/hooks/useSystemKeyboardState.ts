import { useState, useEffect } from 'react';

interface SystemKeyboardState {
  capsLock: boolean;
}

export const useSystemKeyboardState = () => {
  const [capsLock, setCapsLock] = useState(false);

  useEffect(() => {
    const updateCapsLock = (event: KeyboardEvent) => {
      setCapsLock(event.getModifierState('CapsLock'));
    };

    // Initial state
    setCapsLock(
      'getModifierState' in KeyboardEvent.prototype 
        ? new KeyboardEvent('keydown', {}).getModifierState('CapsLock')
        : false
    );

    // Listen for caps lock changes
    window.addEventListener('keydown', updateCapsLock);
    window.addEventListener('keyup', updateCapsLock);

    return () => {
      window.removeEventListener('keydown', updateCapsLock);
      window.removeEventListener('keyup', updateCapsLock);
    };
  }, []);

  return capsLock;
};