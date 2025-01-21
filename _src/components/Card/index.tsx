import type { CSSProperties, ReactNode } from 'react';
import React from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.
// Define an interface for the component props

interface CardProps {
  className?: string, // Custom classes for the container card
  style?: CSSProperties, // Custom styles for the container card
  children: ReactNode, // Content to be included within the card
  shadow?: 'lw' | 'md' | 'tl', // Used to add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
  to: string
}

const baseStyle = {
  cursor: 'pointer',
  borderWidth: '11px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};

// Build the card component with the specified props
const Card: React.ComponentType<CardProps> = ({
  className,
  style,
  children,
  shadow,
  to
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    // honover hand
    <div className={clsx('card', className, cardShadow)} style={{ ...baseStyle, ...style }} onClick={() => window.open(to, '_blank')}>
      {children}
    </div>
  );
};
export default Card;
