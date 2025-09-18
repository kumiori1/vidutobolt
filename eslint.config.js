import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    // Ignore build outputs and dependencies
    ignores: [
      'dist',
      'build',
      'node_modules',
      '*.min.js',
      'coverage',
      '.nyc_output',
      'public/assets'
    ]
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { 
          jsx: true 
        },
        sourceType: 'module',
      },
    },
    settings: { 
      react: { 
        version: '18.2' 
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // JavaScript recommended rules
      ...js.configs.recommended.rules,
      
      // React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // Custom overrides for Viduto project
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off', // We don't use PropTypes in this project
      'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
      'react/jsx-uses-react': 'off', // Not needed with new JSX transform
      
      // React Refresh rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Variables and functions
      'no-unused-vars': [
        'warn',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-useless-return': 'warn',
      'prefer-const': 'warn',
      
      // Best practices
      'eqeqeq': ['warn', 'smart'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'warn',
      'no-useless-call': 'warn',
      'no-useless-concat': 'warn',
      'radix': 'warn',
      
      // Style preferences
      'array-callback-return': 'warn',
      'consistent-return': 'off', // Sometimes we want early returns without values
      'default-case': 'warn',
      'dot-notation': 'warn',
      'guard-for-in': 'warn',
      'no-alert': 'warn',
      'no-caller': 'error',
      'no-case-declarations': 'warn',
      'no-else-return': 'warn',
      'no-empty-function': 'warn',
      'no-empty-pattern': 'warn',
      'no-eq-null': 'warn',
      'no-fallthrough': 'warn',
      'no-floating-decimal': 'warn',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'warn',
      'no-implicit-globals': 'error',
      'no-invalid-this': 'off', // Can be problematic with React
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'warn',
      'no-loop-func': 'warn',
      'no-magic-numbers': 'off', // Too restrictive for UI development
      'no-multi-spaces': 'warn',
      'no-multi-str': 'warn',
      'no-new': 'warn',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'off', // Sometimes needed in React
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': 'warn',
      'no-return-await': 'warn',
      'no-self-assign': 'error',
      'no-undef-init': 'warn',
      'no-undefined': 'off', // undefined is useful in React
      'no-unneeded-ternary': 'warn',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-useless-escape': 'warn',
      'no-void': 'warn',
      'no-warning-comments': 'off', // TODO comments are fine
      'no-with': 'error',
      'prefer-promise-reject-errors': 'warn',
      'require-await': 'warn',
      'vars-on-top': 'off', // Not relevant with let/const
      'wrap-iife': 'warn',
      'yoda': 'warn',
      
      // ES6+ features
      'arrow-body-style': 'off', // Sometimes explicit return is clearer
      'arrow-parens': ['warn', 'as-needed'],
      'arrow-spacing': 'warn',
      'constructor-super': 'error',
      'generator-star-spacing': 'warn',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-new-symbol': 'error',
      'no-this-before-super': 'error',
      'no-useless-computed-key': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-destructuring': 'off', // Sometimes verbose
      'prefer-numeric-literals': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'require-yield': 'error',
      'rest-spread-spacing': 'warn',
      'symbol-description': 'warn',
      'template-curly-spacing': 'warn',
      'yield-star-spacing': 'warn',
      
      // React specific rules
      'react/button-has-type': 'warn',
      'react/default-props-match-prop-types': 'off', // We don't use PropTypes
      'react/destructuring-assignment': 'off', // Sometimes verbose
      'react/display-name': 'off', // Not always necessary
      'react/forbid-prop-types': 'off', // We don't use PropTypes
      'react/jsx-boolean-value': 'warn',
      'react/jsx-closing-bracket-location': 'warn',
      'react/jsx-closing-tag-location': 'warn',
      'react/jsx-curly-spacing': 'warn',
      'react/jsx-equals-spacing': 'warn',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
      'react/jsx-first-prop-new-line': 'off', // Can be too restrictive
      'react/jsx-handler-names': 'off', // Not always applicable
      'react/jsx-indent': 'off', // Handled by formatter
      'react/jsx-indent-props': 'off', // Handled by formatter
      'react/jsx-key': 'error',
      'react/jsx-max-props-per-line': 'off', // Handled by formatter
      'react/jsx-no-bind': 'off', // Sometimes necessary
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-literals': 'off', // Too restrictive
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': 'warn',
      'react/jsx-props-no-spreading': 'off', // Useful pattern
      'react/jsx-tag-spacing': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-wrap-multilines': 'off', // Handled by formatter
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'warn',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'warn',
      'react/no-did-mount-set-state': 'warn',
      'react/no-did-update-set-state': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'warn',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': 'off', // Sometimes useful
      'react/no-render-return-value': 'error',
      'react/no-set-state': 'off', // We use hooks mostly
      'react/no-string-refs': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'warn',
      'react/prefer-es6-class': 'warn',
      'react/prefer-stateless-function': 'off', // Hooks are preferred
      'react/require-default-props': 'off', // We don't use PropTypes
      'react/require-optimization': 'off', // Not always necessary
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'warn',
      'react/sort-comp': 'off', // Not relevant with hooks
      'react/sort-prop-types': 'off', // We don't use PropTypes
      'react/style-prop-object': 'warn',
      'react/void-dom-elements-no-children': 'error',
      
      // Accessibility (a11y) rules - basic set
      'react/jsx-no-target-blank': ['warn', { allowReferrer: true }],
    },
  },
  {
    // Specific rules for development files
    files: ['**/*.config.{js,jsx}', '**/vite.config.{js,jsx}', '**/tailwind.config.{js,jsx}'],
    rules: {
      'no-console': 'off',
    }
  },
  {
    // Specific rules for test files
    files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        test: 'readonly',
        vi: 'readonly', // Vitest
        vitest: 'readonly', // Vitest
      }
    },
    rules: {
      'no-console': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
    }
  }
]