let bsLocal;

const startLocalTesting = (done, {key}) => {
  let Browserstack;
  try {
    Browserstack = require('browserstack-local');
  } catch (err) {
    err.message = 'The package browserstack-local must be installed from NPM.';

    throw err;
  }

  console.log('Setting up browserstack local testing...');
  bsLocal = new Browserstack.Local();

  bsLocal.start({key}, () => {
    console.log('BrowserStackLocal running:', bsLocal.isRunning());
    done();
  });
}

const stopLocalTesting = (done) => bsLocal.stop(() => done());

module.exports = {
  before(done) {
    if (this.settings.desiredCapabilities['browserstack.local']) {
      const key = this.settings.desiredCapabilities['bstack:options'].accessKey;
      startLocalTesting(done, {key});
    } else {
      done();
    }
  },

  after(done) {
    if (bsLocal) {
      stopLocalTesting(done);
    } else {
      done();
    }
  }
}