// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const preprocess = require('./preprocess');


module.exports = (on, config) => {

  on("file:preprocessor", preprocess);

  const targetEnv = config.env.TARGET_ENV || 'qa';

  const environmentConfig = require(`./config/${targetEnv}`);

  return {
    ...config,
    ...environmentConfig,
  };
}