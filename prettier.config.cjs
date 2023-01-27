module.exports = {
  plugins: [
    require('prettier-plugin-svelte'),
    // MUST come last
    // require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
  // tailwindConfig: './tailwind.config.cjs',
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  semi: false,
}
