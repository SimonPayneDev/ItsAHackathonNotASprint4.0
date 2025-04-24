// src/components/ui/button.js

import React from 'react';

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-semibold text-white ${className}`}
    >
      {children}
    </button>
  );
};
