// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            'three': resolve(__dirname, 'node_modules/three'), // Path to your three.js module
            'jsm': resolve(__dirname, 'node_modules/three/examples/jsm') // Path to three.js examples
        }
    }
});