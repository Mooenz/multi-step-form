import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	base: process.env.GITHUB_PAGES ? '/multi-step-form/' : '/',
	plugins: [react(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
});
