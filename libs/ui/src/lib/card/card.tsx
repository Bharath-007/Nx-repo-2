import React from 'react';
import { Card as MuiCard, CardContent, CardProps as MuiCardProps } from '@mui/material';

export interface CardProps extends MuiCardProps {
  title?: string;
}

export function Card({ children, title, ...props }: CardProps) {
  return (
    <MuiCard 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      {...props}
    >
      <CardContent>
        {title && <h3 className="text-xl font-medium mb-3">{title}</h3>}
        {children}
      </CardContent>
    </MuiCard>
  );
}

export default Card;