import React from 'react';
import { Button, Card } from '@nx-monorepo/ui';
import { Home } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-blue-500 mr-2" />
              <h1 className="text-xl font-semibold text-gray-900">App 1</h1>
            </div>
            <Button variant="contained" color="primary">
              Dashboard
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Welcome to App 1">
              <p className="text-gray-600">
                This is App 1 in our NX monorepo. It uses shared UI components from our UI library.
              </p>
              <div className="mt-4">
                <Button variant="outlined" color="primary" className="mr-3">
                  Learn More
                </Button>
                <Button variant="contained" color="secondary">
                  Get Started
                </Button>
              </div>
            </Card>
            <Card title="Shared UI Library">
              <p className="text-gray-600">
                Both App 1 and App 2 use the same UI components from our shared library, ensuring consistent design.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="contained" color="primary" size="small">
                  Primary Button
                </Button>
                <Button variant="contained" color="secondary" size="small">
                  Secondary Button
                </Button>
                <Button variant="outlined" color="error" size="small">
                  Error Button
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-gray-500 text-center">
            App 1 - NX Monorepo Example &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;