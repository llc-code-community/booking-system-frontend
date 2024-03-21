const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
}
plugins.push('babel-plugin-transform-import-meta');

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'], // пресет для работы с React
  plugins,
};
