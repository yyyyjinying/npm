module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  settings: {
    react: {
      version: 'detect', // 告诉 eslint-plugin-react 自动检测 React 的版本
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  /**
   * 'eslint:recommended',
   * 'plugin:react/recommended'使用来自 @eslint-plugin-react 的推荐规则
   * 'plugin:@typescript-eslint/recommended',  // 使用来自@typescript-eslint/eslint-plugin的推荐规则
   *  */

  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 允许对JSX进行解析
    },
    ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
  },
  plugins: ['@typescript-eslint'], // 'react'
  /**自定义规则
    "off" 或0， 关闭规则
    "warn" 或1， 使用警告
    "error"或2 使用错误
  */
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/rule-name': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'prefer-const': 1,
    'no-debugger': 1, // debugger提示
    'no-unused-vars': 0, // 变量underfined
    'no-multi-spaces': 1, //不能用多余的空格
    //禁止使用没有定义的变量，除非在／＊global＊／已经申明
    'no-undef': 0,
    'space-infix-ops': 0, // " space-infix-ops : "
    '@typescript-eslint/triple-slash-reference': 0,
    //禁止把undefined赋值给一个变量

    'no-undef-init': 2,
    //操作符前后需要加空格
    'space-infix-ops': 2,
    'no-string-refs': 0,
  },
};
