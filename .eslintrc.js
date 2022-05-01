module.exports = {
  root: true,
  extends: [
    'react-app/jest',
    'airbnb-typescript',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react-hooks', '@typescript-eslint', 'jsx-a11y'],
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.json, .scss'],
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    window: true,
    document: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'warn',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'global-require': 'off',
    allowTernary: 'off',
    'no-multi-assign': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'func-names': ['warn', 'always', { generators: 'as-needed' }],
    'prefer-const': 'off',
    'prefer-arrow-callback': 'off',
    // 'max-lines': ['error', 400],
    'import/order': ['error', { warnOnUnassignedImports: true }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'testing-library/no-node-access': 'off',
    'testing-library/render-result-naming-convention': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'off',
    'react/static-property-placement': 'off',
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'lifecycle',
          'render',
          '/^render.+$/',
          '/^_render.+$/',
          '/^on.+$/',
          'everything-else',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-extra-boolean-cast': 'off',
    'react/require-default-props': 0,
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'max-len': ['warn', 200],
    '@typescript-eslint/naming-convention': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/default-param-last': 0,
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'max-lines': 'off',
        'import/no-default-export': 'off',
        'max-len': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx', '*.spec.ts', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'max-lines': 'off',
        'max-len': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        '**/*.svg',
        '**/*.json',
        'src/translations/*.ts',
        'src/translations/*.js',
        'src/components/atoms/icons/*.tsx',
        'src/components/atoms/icons/*.ts',
      ],
      rules: {
        'max-lines': 'off',
        'max-len': 'off',
      },
    },
    {
      files: ['**/*.json'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};