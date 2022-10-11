import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserCotenxtProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserCotenxtProvider>
        <App />
    </UserCotenxtProvider>
  </React.StrictMode>
);
