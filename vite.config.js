import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteSSG } from 'vite-ssg-react';

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	if (command === 'serve') {
		return {
			// dev specific config
			plugins: [react(), ViteSSG()],
		}
	} else {
		// command === 'build'
		return {
			//build specific config
			plugins: [react(), ViteSSG()],
			base: '/dynamisk_sida/',
		}
	}
});
