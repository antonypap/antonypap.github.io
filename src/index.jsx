import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// See https://react.dev/reference/react/StrictMode
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(<StrictApp />);
