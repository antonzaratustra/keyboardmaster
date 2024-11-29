export type KeyboardLayout = 'en' | 'ru';
export type KeyboardStyle = 'macbook' | 'windows';
export type SessionStatus = 'active' | 'completed';
export type FingerColor = 'left-pinky' | 'left-ring' | 'left-middle' | 'left-index' | 'right-index' | 'right-middle' | 'right-ring' | 'right-pinky' | 'thumbs' | null;

export interface KeyState {
  char: string;
  isRevealed: boolean;
  isCorrect: boolean;
  isPreHighlighted?: boolean;
  isVisible: boolean;
  fingerColor?: FingerColor;
}

export interface KeyboardState {
  [key: string]: KeyState;
}

export interface KeyData {
  id: string;
  width?: string;
  height?: string;
  chars: {
    en: string;
    ru: string;
  };
  variant?: KeyboardStyle;
  displayText?: {
    en?: string;
    ru?: string;
  };
  fingerColor: FingerColor;
}