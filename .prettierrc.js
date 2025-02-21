// /** @type {import("prettier").Config} */
module.exports = {
  jsxBracketSameLine: false, // JSX闭合标签换行显示(<div></div>)
  eslintIntegration: true, // 让prettier使用eslint的代码格式进行校验
  bracketSameLine: false, // 将>多行 HTML元素放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）<bool>，默认false
  bracketSpacing: true, // 对象中的空格，例如：{ foo：bar }（默认：true）
  singleQuote: true, // 使用单引号
  useTabs: false, // 不使用tab缩进（默认：false）
  semi: false, // 不使用分号
  printWidth: 150, // 超出字符换行（默认：80）
  arrowParens: "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  proseWrap: "preserve", // 超出字符换行方式，按原样显示（默认）
  quoteProps: "as-needed", // 对象中的引号(仅在需要时在对象属性周围添加引号)
  endOfLine: "lf", // 换行符使用，保持现有的行尾设置（默认：auto）
  tabWidth: 2, // Tab 键的字符宽度
  trailingComma: "none" // 不使用行尾逗号
}