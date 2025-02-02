import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	if (command === 'serve') {
		return {
			// dev specific config
			plugins: [react()],
		}
	} else {
		// command === 'build'
		return {
			//build specific config
			plugins: [react()],
			base: '/dynamisk_sida/',
			build: {
				rollupOptions: {
					input: {
						main: 'index.html',
					},
				},
			},
		}
	}
})
