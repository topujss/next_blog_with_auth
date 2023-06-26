'use client';
import { ThemeContext } from '@/Context/ThemeContext';
import React, { useContext } from 'react';

export default function DarkMode() {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="container_dark w-12 h-7 border-2 border-solid  rounded-3xl flex items-center justify-between  relative cursor-pointer"
      onClick={toggle}
    >
      <div className="icon">🌙</div>
      <div className="icon">🔆</div>
      <div
        className="w-5 h-5 bg-btn-primary rounded-full absolute ball"
        style={mode === 'light' ? { left: '22px' } : { right: '2px' }}
      ></div>
    </div>
  );
}
