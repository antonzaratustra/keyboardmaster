import React from 'react';

interface TimedBorderProps {
  children: React.ReactNode;
  isActive: boolean;
  duration: number;
  onTimeout: () => void;
  isDarkMode: boolean;
}

export function TimedBorder({ children, isActive, isDarkMode, duration, onTimeout }: TimedBorderProps) {
  const [progress, setProgress] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isActive) {
      setProgress(0);
      startTimeRef.current = Date.now();

      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const currentProgress = (elapsed / duration) * 100;
        
        if (currentProgress >= 100) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setProgress(100);
          onTimeout();
        } else {
          setProgress(currentProgress);
        }
      }, 16);
    } else {
      setProgress(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, onTimeout, duration, children]);

  return (
    <div className={`relative rounded-2xl ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'}`}>
      {isActive && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(to right, 
              ${isDarkMode ? '#818cf8' : '#4f46e5'} ${progress}%, 
              transparent ${progress + 3}%
            )`,
            opacity: isDarkMode ? 0.3 : 0.2,
            pointerEvents: 'none'
          }}
        />
      )}
      {children}
    </div>
  );
} 