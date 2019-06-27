const {writeFile, readFileSync} = require('fs');
const path = require('path');
const {resolve} = require('path');

const integration = (() => {
  const texts = [
    'getCookieString',
  ]
  const methods = {}

  texts.forEach((file) => {
    methods[file] = () => readFileSync(getFilePath(file, '', 'txt'), 'utf8')
  })

  methods.saveCredentials = (credentials = {}) => {
    // @TO DO use library to make sure file is created
    // @TO DO ignore cookie file from git
    debug(credentials);
    const {cookieString} = credentials;
    if (cookieString) {
      const file = 'getCookieString';
      writeFile(getFilePath(file, 'txt', 'txt'), cookieString, 'utf8', (err) => {
        if (err) {
          return Promise.reject(err);
        }

        return Promise.resolve();
      });
    }
  };

  return methods
})()

const testModules = {
  integration,
}

function getHTML(file) {
  const options = {
    dir: 'html',
    ext: 'html',
  };
  return getFile(file, options);
}

function getFile(file, options) {
  const {
    dir = '',
    ext = 'txt',
    transform,
    encoding = 'utf8',
  } = options;
  const filepath = path.resolve(__dirname, dir, `${file}.${ext}`);
  const result = readFileSync(filepath, encoding);
  if (transform) {
    return transform(result);
  }
  return result;
}


function getTestData(testModule) {
  return testModules[testModule]
}

function getFilePath(filename, subpath = '', extension = '') {
  return resolve(__dirname, subpath, `${filename}.${extension}`);
}

module.exports = {
  getTestData,
  getHTML,
}
