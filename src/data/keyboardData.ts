import { KeyData } from '../types/keyboard';

export const KEYBOARD_ROWS: KeyData[][] = [
  // Number row
  [
    { id: 'Backquote', chars: { en: '`', ru: 'Ё' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Digit1', chars: { en: '1', ru: '1' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Digit2', chars: { en: '2', ru: '2' }, width: 'w-[48px]', fingerColor: 'left-ring' },
    { id: 'Digit3', chars: { en: '3', ru: '3' }, width: 'w-[48px]', fingerColor: 'left-middle' },
    { id: 'Digit4', chars: { en: '4', ru: '4' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'Digit5', chars: { en: '5', ru: '5' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'Digit6', chars: { en: '6', ru: '6' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'Digit7', chars: { en: '7', ru: '7' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'Digit8', chars: { en: '8', ru: '8' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'Digit9', chars: { en: '9', ru: '9' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Digit0', chars: { en: '0', ru: '0' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Minus', chars: { en: '-', ru: '-' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Equal', chars: { en: '=', ru: '=' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Backspace', chars: { en: '⌫', ru: '⌫' }, width: 'w-[80px]', displayText: { en: 'Backspace', ru: 'Backspace' }, fingerColor: 'left-pinky' }
  ],
  // QWERTY row
  [
    { id: 'Tab', chars: { en: '⇥', ru: '⇥' }, width: 'w-[70px]', displayText: { en: 'Tab', ru: 'Tab' }, fingerColor: 'left-pinky' },
    { id: 'KeyQ', chars: { en: 'Q', ru: 'Й' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'KeyW', chars: { en: 'W', ru: 'Ц' }, width: 'w-[48px]', fingerColor: 'left-ring' },
    { id: 'KeyE', chars: { en: 'E', ru: 'У' }, width: 'w-[48px]', fingerColor: 'left-middle' },
    { id: 'KeyR', chars: { en: 'R', ru: 'К' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyT', chars: { en: 'T', ru: 'Е' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyY', chars: { en: 'Y', ru: 'Н' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'KeyU', chars: { en: 'U', ru: 'Г' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'KeyI', chars: { en: 'I', ru: 'Ш' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'KeyO', chars: { en: 'O', ru: 'Щ' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'KeyP', chars: { en: 'P', ru: 'З' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'BracketLeft', chars: { en: '[', ru: 'Х' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'BracketRight', chars: { en: ']', ru: 'Ъ' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Backslash', chars: { en: '\\', ru: '\\'}, width: 'w-[70px]', fingerColor: 'left-pinky' }
  ],
  // Home row
  [
    { id: 'CapsLock', chars: { en: '⇪', ru: '⇪' }, width: 'w-[80px]', displayText: { en: 'CapsLock', ru: 'CapsLock' }, fingerColor: 'left-pinky' },
    { id: 'KeyA', chars: { en: 'A', ru: 'Ф' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'KeyS', chars: { en: 'S', ru: 'Ы' }, width: 'w-[48px]', fingerColor: 'left-ring' },
    { id: 'KeyD', chars: { en: 'D', ru: 'В' }, width: 'w-[48px]', fingerColor: 'left-middle' },
    { id: 'KeyF', chars: { en: 'F', ru: 'А' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyG', chars: { en: 'G', ru: 'П' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyH', chars: { en: 'H', ru: 'Р' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'KeyJ', chars: { en: 'J', ru: 'О' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'KeyK', chars: { en: 'K', ru: 'Л' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'KeyL', chars: { en: 'L', ru: 'Д' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'Semicolon', chars: { en: ';', ru: 'Ж' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Quote', chars: { en: '\'', ru: 'Э' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'Enter', chars: { en: '↵', ru: '↵' }, width: 'w-[90px]', displayText: { en: 'Enter', ru: 'Enter' }, fingerColor: 'left-pinky' }
  ],
  // Bottom row
  [
    { id: 'ShiftLeft', chars: { en: '⇧', ru: '⇧' }, width: 'w-[100px]', displayText: { en: 'LShift', ru: 'LShift' }, fingerColor: 'left-pinky' },
    { id: 'KeyZ', chars: { en: 'Z', ru: 'Я' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'KeyX', chars: { en: 'X', ru: 'Ч' }, width: 'w-[48px]', fingerColor: 'left-ring' },
    { id: 'KeyC', chars: { en: 'C', ru: 'С' }, width: 'w-[48px]', fingerColor: 'left-middle' },
    { id: 'KeyV', chars: { en: 'V', ru: 'М' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyB', chars: { en: 'B', ru: 'И' }, width: 'w-[48px]', fingerColor: 'left-index' },
    { id: 'KeyN', chars: { en: 'N', ru: 'Т' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'KeyM', chars: { en: 'M', ru: 'Ь' }, width: 'w-[48px]', fingerColor: 'right-middle' },
    { id: 'Comma', chars: { en: ',', ru: 'Б' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'Period', chars: { en: '.', ru: 'Ю' }, width: 'w-[48px]', fingerColor: 'right-ring' },
    { id: 'Slash', chars: { en: '/', ru: '.' }, width: 'w-[48px]', fingerColor: 'left-pinky' },
    { id: 'ShiftRight', chars: { en: '⇧', ru: '⇧' }, width: 'w-[100px]', displayText: { en: 'RShift', ru: 'RShift' }, fingerColor: 'left-pinky' }
  ],
  // Space row - Windows
  [
    { id: 'ControlLeft', chars: { en: 'Ctrl', ru: 'Ctrl' }, width: 'w-[70px]', variant: 'windows', displayText: { en: 'LCtrl', ru: 'LCtrl' }, fingerColor: 'left-pinky' },
    { id: 'Win', chars: { en: '⊞', ru: '⊞' }, width: 'w-[50px]', variant: 'windows', displayText: { en: 'Win', ru: 'Win' }, fingerColor: 'left-pinky' },
    { id: 'AltLeft', chars: { en: 'Alt', ru: 'Alt' }, width: 'w-[50px]', variant: 'windows', displayText: { en: 'LAlt', ru: 'LAlt' }, fingerColor: 'left-pinky' },
    { id: 'Space', chars: { en: '', ru: '' }, width: 'w-[280px]', variant: 'windows', fingerColor: 'thumbs' },
    { id: 'AltRight', chars: { en: 'Alt', ru: 'Alt' }, width: 'w-[50px]', variant: 'windows', displayText: { en: 'RAlt', ru: 'RAlt' }, fingerColor: 'right-middle' },
    { id: 'ControlRight', chars: { en: 'Ctrl', ru: 'Ctrl' }, width: 'w-[70px]', variant: 'windows', displayText: { en: 'RCtrl', ru: 'RCtrl' }, fingerColor: 'right-middle' },
    { id: 'ArrowLeft', chars: { en: '←', ru: '←' }, width: 'w-[48px]', variant: 'windows', fingerColor: 'right-middle' },
    { id: 'ArrowContainer', chars: { en: '', ru: '' }, width: 'w-[48px]', variant: 'windows', fingerColor: 'right-middle' },
    { id: 'ArrowRight', chars: { en: '→', ru: '→' }, width: 'w-[48px]', variant: 'windows', fingerColor: 'right-middle' }
  ],
  // Space row - MacBook
  [
    { id: 'Fn', chars: { en: 'fn', ru: 'fn' }, width: 'w-[50px]', variant: 'macbook', fingerColor: 'left-pinky' },
    { id: 'Control', chars: { en: '⌃', ru: '⌃' }, width: 'w-[70px]', variant: 'macbook', displayText: { en: 'Control', ru: 'Control' }, fingerColor: 'left-pinky' },
    { id: 'OptionLeft', chars: { en: '⌥', ru: '⌥' }, width: 'w-[50px]', variant: 'macbook', displayText: { en: 'Option', ru: 'Option' }, fingerColor: 'left-pinky' },
    { id: 'CommandLeft', chars: { en: '⌘', ru: '⌘' }, width: 'w-[50px]', variant: 'macbook', displayText: { en: 'L⌘', ru: 'L⌘' }, fingerColor: 'left-pinky' },
    { id: 'Space', chars: { en: '', ru: '' }, width: 'w-[280px]', variant: 'macbook', fingerColor: 'thumbs' },
    { id: 'CommandRight', chars: { en: '⌘', ru: '⌘' }, width: 'w-[50px]', variant: 'macbook', displayText: { en: 'R⌘', ru: 'R⌘' }, fingerColor: 'right-middle' },
    { id: 'OptionRight', chars: { en: '⌥', ru: '⌥' }, width: 'w-[50px]', variant: 'macbook', displayText: { en: 'Option', ru: 'Option' }, fingerColor: 'right-middle' },
    { id: 'ArrowLeft', chars: { en: '←', ru: '←' }, width: 'w-[48px]', variant: 'macbook', fingerColor: 'right-middle' },
    { id: 'ArrowContainer', chars: { en: '', ru: '' }, width: 'w-[48px]', variant: 'macbook', fingerColor: 'right-middle' },
    { id: 'ArrowRight', chars: { en: '→', ru: '→' }, width: 'w-[48px]', variant: 'macbook', fingerColor: 'right-middle' }
  ]
];