import React from 'react';
import { theme } from '../../styles/theme';

export const Card = ({ children, className = '', hover = true }) => (
    <div className={`
        ${theme.card.base}
        ${hover ? theme.card.hover : ''}
        ${className}
    `}>
        {children}
    </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);