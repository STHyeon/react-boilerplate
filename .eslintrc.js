module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsdoc',
    'simple-import-sort',
  ],
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: process.cwd(),
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  rules: {
    // === plugin:@typescript-eslint/recommended ===
    // === ref: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin ===
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'enum',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // === plugin:import ===
    // === ref: https://github.com/import-js/eslint-plugin-import ===
    'import/no-anonymous-default-export': 'off',

    // === react-app (eslint-plugin-react) ===
    // === ref: https://github.com/yannickcr/eslint-plugin-react ===
    'react/style-prop-object': [
      'warn',
      {
        allow: [
          'FormattedDateParts',
          'FormattedList',
          'FormattedNumber',
          'FormattedRelativeTime',
        ],
      },
    ],

    // === plugin:react-hooks (eslint-plugin-react-hooks) ===
    // === ref: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks ===
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        // additional hooks for recoil
        // - ref: https://recoiljs.org/docs/introduction/installation#eslint
        additionalHooks:
          '(useRecoilCallback|useRecoilTransaction|useRecoilTransaction_UNSTABLE)',
      },
    ],

    // === plugin:simple-import-sort ===
    // === ref: https://github.com/lydell/eslint-plugin-simple-import-sort ===
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Other relative imports. Put same-folder imports and `.` last.
          [
            '^src/',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // library related imports.
          ['^.+\\.styled$', '^.+\\.i18n$'],
          // Type imports.
          ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
          // Style imports.
          ['^.+\\.s?css$'],
          // Image imports.
          ['^.+\\.(png|jpg|jpeg|gif|svg)$'],
        ],
      },
    ],

    // === eslint ===
    'block-spacing': 'warn',
    'brace-style': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'no-console': ['warn', { allow: ['info', 'debug', 'warn', 'error'] }],
    'no-debugger': 'warn',
    'no-multiple-empty-lines': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': 'off',
  },
};
