// @TO DO:
// - test this
// - use options to choose solvers
// - use options to choose type
const Promise = require('bluebird');
// const request = require('request');
const tempWrite = require('temp-write');
const prompt = require('prompt');
const {Client: CaptchaClient} = require('pluto-captcha');
const DBC = require('./deathbycaptcha');
global.Promise = Promise;
module.exports = {
  create(options = {}) {
    const {driver, type = 'lion', transform = {}} = options;
    const {DBC_USERNAME, DBC_PASSWORD} = process.env;
    if (driver === 'dbc') {
      return dbcSolver({DBC_USERNAME, DBC_PASSWORD});
    }
    if (driver === 'pluto') {
      const captchaClientOptions = {
        serverUrl: process.env.PLUTO_CAPTCHA_SERVER_URL,
        storageOptions: {
          serverUrl: process.env.PLUTO_CAPTCHA_STORAGE_URL,
          auth: process.env.PLUTO_CAPTCHA_STORAGE_AUTH,
        },
      };
      const PlutoSolver = CaptchaClient(captchaClientOptions);
      return function plutoSolver(buffer) {
        return Promise.resolve()
          .then(() => tempWrite(buffer, 'captcha.jpg'))
          .then((filepath) => PlutoSolver.solve({filepath, type, transform}));
      };
    }

    return manualSolver;
  },
};

function manualSolver(captchaUrl) {
  return new Promise((resolve, reject) => {
    prompt.start();
    const schema = {
      properties: {
        captcha: {
          message: `Please visit ${captchaUrl} and input the text here`,
          required: true,
        },
      },
    };
    prompt.get(schema, (error, result) => {
      if (error) {
        return reject(error);
      }

      const {captcha} = result;
      return resolve({captcha});
    });
  });
}

function dbcSolver(options = {}) {
  const {DBC_USERNAME, DBC_PASSWORD} = options;
  const dbc = new DBC(DBC_USERNAME, DBC_PASSWORD);
  return function solver(buffer) {
    return new Promise((resolve, reject) =>
      dbc.solve(buffer, (error2, id, captcha) => {
        if (error2) {
          return reject(error2);
        }

        const output = {captcha};
        output.report = report(id);
        return resolve(output);
      }));
  };

  function report(id) {
    return () => new Promise((resolve, reject) => {
      dbc.report(id, (error3) => {
        if (error3) {
          return reject(error3);
        }

        return resolve();
      });
    });
  }
}
