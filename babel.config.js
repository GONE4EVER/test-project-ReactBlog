require('dotenv').config()

module.exports = function (api) {
  const isDev = process.env.NODE_ENV === 'development'; 
  console.log(isDev)
  api.cache(isDev);
  
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
    presets,
    plugins
  };
}