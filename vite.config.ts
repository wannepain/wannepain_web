import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true, // equivalent to 0.0.0.0, allows external devices to connect
		port: 5173, // or whatever port you prefer
		cors: true // allows cross-origin requests; customize if needed
	},
	plugins: [
		sveltekit()
		
	]
	// css: {
	// 	transformer: 'lightningcss'  // optional, but helps with plugin compatibility :contentReference[oaicite:4]{index=4}
	//   }
});
