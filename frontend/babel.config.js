require('dotenv').config()

module.exports = function (api) {
  const devMode = process.env.NODE_ENV === 'development'; 
  api.cache(devMode);
  
  const presets = [
    "@babel/react",
    "@babel/env"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-json-strings",

    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-syntax-dynamic-import",

    "react-css-modules",
  ];

  return {
    presets: devMode 
    ? presets
    : [
      ...presets,
      'minify'
    ],
    plugins
  };
}