import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Include .jsx files
      include: "**/*.{jsx,tsx}",
      // Babel plugins for React
      babel: {
        plugins: [
          // Add any additional Babel plugins here if needed
        ]
      }
    })
  ],
  
  // Path resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/assets': path.resolve(__dirname, './src/assets')
    },
  },

  // Development server configuration
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: false, // Try other ports if 5173 is taken
    open: false, // Don't auto-open browser
    cors: true,
    // Proxy API calls if needed (uncomment when connecting to real API)
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     secure: false,
    //   }
    // }
  },

  // Preview server configuration
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: false,
    cors: true
  },

  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Assets directory
    assetsDir: 'assets',
    
    // Generate source maps for debugging
    sourcemap: false,
    
    // Minification
    minify: 'esbuild', // 'esbuild' is faster than 'terser'
    
    // Target browsers
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // CSS minification
    cssMinify: true,
    
    // Rollup options for advanced bundling
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunk for React and core libraries
          vendor: ['react', 'react-dom'],
          
          // UI libraries chunk
          ui: ['lucide-react'],
          
          // Router chunk
          router: ['react-router-dom'],
          
          // Utilities chunk
          utils: ['clsx', 'tailwind-merge']
        },
        
        // Asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          
          // Organize assets by type
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images'
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts'
          }
          
          return `${extType}/[name]-[hash][extname]`
        },
        
        // Chunk file names
        chunkFileNames: 'js/[name]-[hash].js',
        
        // Entry file names
        entryFileNames: 'js/[name]-[hash].js'
      }
    },

    // Dependency optimization
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },

  // CSS configuration
  css: {
    // CSS modules configuration
    modules: {
      localsConvention: 'camelCase'
    },
    
    // PostCSS configuration (can also be in postcss.config.js)
    postcss: {
      plugins: [
        // Will use postcss.config.js if it exists
      ]
    },

    // CSS preprocessing
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Global SCSS variables and mixins can go here
          // @import "@/styles/variables.scss";
        `
      }
    },

    // Dev source maps
    devSourcemap: true
  },

  // Environment variables
  envPrefix: ['VITE_', 'VIDUTO_'],

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    exclude: [
      // Exclude any problematic dependencies
    ],
    esbuildOptions: {
      target: 'es2020'
    }
  },

  // ESBuild configuration
  esbuild: {
    // Remove console.log in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    
    // JSX configuration
    jsx: 'automatic',
    
    // Target ES2020 for modern browsers
    target: 'es2020'
  },

  // Worker configuration
  worker: {
    format: 'es'
  },

  // JSON loading
  json: {
    namedExports: true,
    stringify: false
  },

  // Logging level
  logLevel: 'info',

  // Clear screen on rebuild
  clearScreen: true,

  // Asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],

  // Public directory
  publicDir: 'public'
})