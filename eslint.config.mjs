import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

export default [
  // Base: ignore common folders and files
  {
    ignores: [
      'node_modules/**',
      'build/**',
      'images/**',
      'spec/support/**',
      'jasmine.json',
    ],
  },

  // JavaScript files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-undef': 'warn',
    },
  },

  // TypeScript source files (.ts and .tsx)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    ...tseslint.configs.recommended[0],
  },

  // Test files
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },

  // React JSX/TSX files
  {
    files: ['**/*.{jsx,tsx}'],
    ...pluginReact.configs.recommended,
  },
];
