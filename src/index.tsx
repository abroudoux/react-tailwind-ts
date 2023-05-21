// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import App from './App';

// Styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
  		<App />
	</React.StrictMode>
)
