import { ViteSSG } from 'vite-ssg-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/print.css';
import App from './App.jsx';

// createRoot(document.getElementById('box-content')).render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>,
// )

export const createApp = ViteSSG(
	() => (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	),
	{ base: '/dynamisk_sida/' }
);