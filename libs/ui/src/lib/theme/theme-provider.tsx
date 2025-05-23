import React, { createContext, useContext, ReactNode, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define theme types
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  theme: Theme;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define props
export interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export function ThemeProvider({ children, defaultMode = 'light' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create MUI theme
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3B82F6', // Blue
          },
          secondary: {
            main: '#14B8A6', // Teal
          },
          error: {
            main: '#EF4444', // Red
          },
          warning: {
            main: '#F59E0B', // Amber
          },
          info: {
            main: '#3B82F6', // Blue
          },
          success: {
            main: '#10B981', // Green
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h3: {
            fontWeight: 600,
            lineHeight: 1.2,
          },
          h4: {
            fontWeight: 600,
            lineHeight: 1.2,
          },
          h5: {
            fontWeight: 500,
            lineHeight: 1.2,
          },
          h6: {
            fontWeight: 500,
            lineHeight: 1.2,
          },
          body1: {
            lineHeight: 1.5,
          },
          body2: {
            lineHeight: 1.5,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 500,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                boxShadow: mode === 'light' 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
              },
            },
          },
        },
      }),
    [mode]
  );

  const value = { mode, toggleMode, theme };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

// Hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;