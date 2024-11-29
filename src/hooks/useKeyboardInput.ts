import { useEffect, useCallback } from 'react';
import { KeyboardLayout } from '../types/keyboard';

// List of keys that should be ignored
const IGNORED_KEYS = new Set([
  'Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'Space', 
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
  'Enter', 'Backspace', 'ControlLeft', 'ControlRight',
  'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight',
  'Fn', 'Win', 'OptionLeft', 'OptionRight',
  'CommandLeft', 'CommandRight'
]);

export const useKeyboardInput = (
  onKeyPress: (keyId: string) => void,
  layout: KeyboardLayout
) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Prevent handling repeated keydown events
    if (event.repeat) return;

    // Map physical key codes to our key IDs
    const keyId = event.code;
    if (keyId && !IGNORED_KEYS.has(keyId)) {
      onKeyPress(keyId);
    }
  }, [onKeyPress]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};