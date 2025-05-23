import React from 'react';
import { Button, Card } from '@nx-monorepo/ui';
import { Layout } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Layout className="h-6 w-6 text-white mr-2" />
              <h1 className="text-xl font-semibold text-white">App 2</h1>
            </div>
            <Button variant="contained" color="secondary">
              Analytics
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Welcome to App 2">
              <p className="text-gray-600">
                This is App 2 in our NX monorepo. It has a different design style but uses the same UI component library.
              </p>
              <div className="mt-4">
                <Button variant="outlined" color="secondary" className="mr-3">
                  Documentation
                </Button>
                <Button variant="contained" color="primary">
                  Explore
                </Button>
              </div>
            </Card>
            <Card title="Material UI + Tailwind">
              <p className="text-gray-600">
                Our UI library combines Material UI components with Tailwind CSS utility classes for flexible styling.
              </p>
              <div className="mt-4 space-y-3">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm text-indigo-800">
                    Shared components ensure consistent UX across all applications.
                  </p>
                </div>
                <Button variant="contained" color="primary" fullWidth>
                  View Component Library
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-center">
            App 2 - NX Monorepo Example &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;