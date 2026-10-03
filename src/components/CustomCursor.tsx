import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"]');
      if (projectTarget) {
        setCursorType('view');
        return;
      }

      const interactiveTarget =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.closest('.interactive');

      if (interactiveTarget) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing spring effect
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot (hidden when in 'view' mode) */}
      {cursorType !== 'view' && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
            width: cursorType === 'hover' ? '8px' : '4px',
            height: cursorType === 'hover' ? '8px' : '4px',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 8px #ffffff',
          }}
        />
      )}

      {/* Outer Ring / View Pill */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full transition-all duration-200 ease-out flex items-center justify-center font-mono text-[10px] tracking-widest font-bold"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'view' ? '68px' : cursorType === 'hover' ? '44px' : '28px',
          height: cursorType === 'view' ? '68px' : cursorType === 'hover' ? '44px' : '28px',
          border: cursorType === 'view' ? 'none' : '1px solid rgba(255, 255, 255, 0.35)',
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(59, 130, 246, 0.95)'
              : cursorType === 'hover'
              ? 'rgba(59, 130, 246, 0.15)'
              : 'transparent',
          color: '#ffffff',
          boxShadow:
            cursorType === 'view'
              ? '0 0 25px rgba(59, 130, 246, 0.5)'
              : cursorType === 'hover'
              ? '0 0 15px rgba(59, 130, 246, 0.2)'
              : 'none',
        }}
      >
        {cursorType === 'view' && 'VIEW'}
      </div>
    </>
  );
};
