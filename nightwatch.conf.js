// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: [],
  plugins: ['vite-plugin-nightwatch'],
  page_objects_path: ['node_modules/nightwatch/examples/pages/'],
  custom_commands_path: ['node_modules/nightwatch/examples/custom-commands/'],
  custom_assertions_path: '',
  globals_path : 'test/globals.cjs',

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: '${VITE_BASE_URL}',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          w3c: true,
          args: [
            //'--auto-open-devtools-for-tabs',
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        log_path: false,
        server_path: ''
      }
    },

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    chrome: {
    },

    edge: {
      desiredCapabilities : {
        browserName : 'MicrosoftEdge',
        'ms:edgeOptions' : {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USER                                                           |
    // - BROWSERSTACK_KEY                                                            |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true
      }
    },

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: true
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },

    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'internet explorer',
        browserVersion: '11.0'
      }
    },

    'browserstack.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'safari'
      }
    },

    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    'browserstack.ipad.safari': {
      extends: 'browserstack.local',
      launch_url: 'http://192.168.10.184:3000/',
      desiredCapabilities: {
        device : 'iPad Air 4',
        realMobile : true,
        os_version : 14,
        browserName : 'safari',
        'browserstack.networkLogs': true,
        'browserstack.console': 'errors',
        'browserstack.local': true
      }
    },

    'browserstack.local_firefox': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};