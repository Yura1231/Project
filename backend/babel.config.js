module.exports = {
    presets: [
      '@babel/preset-env', // This ensures compatibility across various environments
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs', // This ensures that ES modules get transpiled to CommonJS
    ],
  };
  