import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
  // Additional custom props can be added here
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton 
      className="transition-all duration-200 hover:shadow-md"
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;