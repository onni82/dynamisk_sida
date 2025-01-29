import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/print.css'
import App from './App.jsx'

createRoot(document.getElementById('box-content')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
