module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended', 'plugin:vue/vue3-essential'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    // 不允许出现console语句
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 不允许出现debugger语句
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // enforce the maximum number of attributes per line
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
        }
      }
    ],
    // require a line break before and after the contents of a singleline element
    'vue/singleline-html-element-content-newline': 'off',
    // require a line break before and after the contents of a multiline element
    'vue/multiline-html-element-content-newline': 'off',
    // enforce specific casing for the name property in Vue components
    'vue/name-property-casing': ['error', 'PascalCase'],
    // disallow use of v-html to prevent XSS attack
    'vue/no-v-html': 'off',
    // disallow parsing errors in <template>
    'vue/no-parsing-error': 'error',
    // enforce order of properties in components
    'vue/order-in-components': 'error',
    // require or disallow a line break before tag's closing brackets
    'vue/html-closing-bracket-newline': 'error',
    // disallow using v-if on the same element as v-for
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false
      }
    ],
    // disallow duplication of field names
    'vue/no-dupe-keys': 'error',
    // 在对象中使用getter/setter
    'accessor-pairs': 'error',
    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // Enforce consistent spacing before and after the arrow in arrow functions, => 的前/后括号
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error', 'always'],
    // Enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // Enforce camelcase naming convention
    camelcase: ['error', { properties: 'always' }],
    // Require or disallow trailing commas,是否允许对象中出现结尾逗号
    'comma-dangle': ['error', 'never'],
    // Enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],
    // Enforce consistent comma style
    'comma-style': ['error', 'last'],
    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],
    // Require super() calls in constructors
    'constructor-super': 'error',
    // Enforce consistent brace style for all control statements
    curly: ['error', 'multi-line'],
    // Enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],
    // Require or disallow newline at the end of files
    'eol-last': ['error', 'always'],
    // Require the use of === and !==
    eqeqeq: ['error', 'always'],
    // Enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': ['error', { before: true, after: true }],
    // Require error handling in callbacks
    'handle-callback-err': ['error', '^(err|error)$'],
    // Enforce consistent indentation
    indent: ['error', 2, { SwitchCase: 1 }],
    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],
    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { before: true, after: true }],
    // Require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // Enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // Disallow Array constructors
    'no-array-constructor': 'error',
    // Disallow the use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // Disallow reassigning class members
    'no-class-assign': 'error',
    // Disallow assignment operators in conditional expressions
    'no-cond-assign': 'error',
    // Disallow reassigning const variables
    'no-const-assign': 'error',
    // Disallow control characters in regular expressions
    'no-control-regex': 'off',
    // Disallow deleting variables
    'no-delete-var': 'error',
    // Disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // Disallow duplicate class members
    'no-dupe-class-members': 'error',
    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // Disallow duplicate case labels
    'no-duplicate-case': 'error',
    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',
    // Disallow the use of eval()
    'no-eval': 'error',
    // Disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // Disallow extending native types
    'no-extend-native': 'error',
    // Disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',
    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // Disallow unnecessary parentheses
    'no-extra-parens': ['error', 'functions'],
    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // Disallow reassigning function declarations
    'no-func-assign': 'error',
    // Disallow the use of eval()-like methods
    'no-implied-eval': 'error',
    // Disallow variable or function declarations in nested blocks
    'no-inner-declarations': ['error', 'functions'],
    // Disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',
    // Disallow irregular whitespace
    'no-irregular-whitespace': 'error',
    // Disallow the use of the __iterator__ property
    'no-iterator': 'error',
    // Disallow labels that share a name with a variable
    'no-label-var': 'error',
    // Disallow labeled statements
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow multiple spaces
    'no-multi-spaces': 'error',
    // Disallow multiline strings
    'no-multi-str': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1 }],
    // Disallow assignments to native objects or read-only global variables
    'no-native-reassign': 'error',
    // Disallow negating the left operand in in expressions
    'no-negated-in-lhs': 'error',
    // Disallow Object constructors
    'no-new-object': 'error',
    // Disallow new operators with calls to require
    'no-new-require': 'error',
    // Disallow new operators with the Symbol object
    'no-new-symbol': 'error',
    // Disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',
    // Disallow calling global object properties as functions
    'no-obj-calls': 'error',
    // Disallow octal literals
    'no-octal': 'error',
    // Disallow octal escape sequences in string literals
    'no-octal-escape': 'error',
    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',
    // Disallow the use of the __proto__ property
    'no-proto': 'error',
    // Disallow variable redeclaration
    'no-redeclare': 'error',
    // Disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',
    // Disallow assignment operators in return statements
    'no-return-assign': ['error', 'except-parens'],
    // Disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',
    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // Disallow comma operators
    'no-sequences': 'error',
    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',
    // Disallow spacing between function identifiers and their applications (deprecated)
    'no-spaced-func': 'error',
    // Disallow sparse arrays
    'no-sparse-arrays': 'error',
    // Disallow this/super before calling super() in constructors
    'no-this-before-super': 'error',
    // Disallow throwing literals as exceptions
    'no-throw-literal': 'error',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 'error',
    // Disallow initializing variables to undefined
    'no-undef-init': 'error',
    // Disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',
    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',
    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // Disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',
    // Disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // Disallow unused variables
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // Disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 'error',
    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',
    // Disallow unnecessary constructors
    'no-useless-constructor': 'error',
    // Disallow unnecessary escape characters
    'no-useless-escape': 'off',
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // Disallow with statements
    'no-with': 'error',
    // Enforce variables to be declared either together or separately in functions
    'one-var': ['error', { initialized: 'never' }],
    // Enforce consistent linebreak style for operators
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: { '?': 'before', ':': 'before' }
      }
    ],
    // Require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],
    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // Require or disallow semicolons instead of ASI
    semi: ['error', 'never'],
    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],
    // Enforce consistent spacing before blocks
    'space-before-blocks': ['error', 'always'],
    // Enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'never'],
    // Enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],
    // Require spacing around infix operators
    'space-infix-ops': 'error',
    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // Enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],
    // Require calls to isNaN() when checking for NaN
    'use-isnan': 'error',
    // Enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error',
    // Require parentheses around immediate function invocations
    'wrap-iife': ['error', 'any'],
    // Require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'both'],
    // Require or disallow "Yoda" conditions
    yoda: ['error', 'never'],
    // Require const declarations for variables that are never reassigned after declared
    'prefer-const': 'error',
    // Enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }]
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true
      }
    }
  ]
}
