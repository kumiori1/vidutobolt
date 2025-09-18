export default {
  plugins: {
    // Tailwind CSS - Main utility framework
    'tailwindcss': {},
    
    // Autoprefixer - Adds vendor prefixes for browser compatibility
    'autoprefixer': {
      // Browser support configuration
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not op_mini all',
        'last 2 versions',
        'Firefox ESR',
        'not IE 11'
      ],
      // Grid support
      grid: true,
      // Flexbox support
      flexbox: 'no-2009',
      // Remove outdated prefixes
      remove: true
    },
    
    // CSS Nano for production optimization (only in production)
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: ['default', {
          // Preserve comments that start with !
          discardComments: {
            removeAll: false,
          },
          // Don't merge rules that might break specificity
          mergeRules: false,
          // Preserve CSS custom properties
          reduceIdents: false,
          // Don't remove unused keyframes (might be used dynamically)
          discardUnused: false,
          // Don't normalize whitespace in values
          normalizeWhitespace: false,
          // Safe minification options
          minifyFontValues: { removeAfterKeyword: false },
          minifyParams: false,
          convertValues: false,
          colormin: false,
          orderedValues: false,
          uniqueSelectors: false
        }]
      }
    })
  }
}