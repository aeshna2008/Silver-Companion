import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // Add the PWA plugin configuration
      registerType: 'autoUpdate', // Automatically update the app when new content is available
      manifest: {
        name: 'Silver Companion', // Your app's full name
        short_name: 'Silver Companion', // Shorter name for the icon label
        description: 'Your AI-powered mental wellness companion.', // App description
        theme_color: '#6366f1', // Main color for the app's UI elements (like the status bar)
        background_color: '#e0e7ff', // Background color for the splash screen
        display: 'standalone', // Makes the app look like a native app (no browser UI)
        scope: '/',
        start_url: '/',
        icons: [ // Icons for different screen sizes
          {
            src: '/icon-192x192.png', // We will create these icons next
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Important for adaptive icons on Android
          }
        ]
      }
    })
  ],
})
