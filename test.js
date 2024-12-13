const { remote } = require('webdriverio');

let browser;

// main code
(async () => {
    console.log('Connecting to Selenium');
    browser = await remote({
        hostname: 'selenium',
        port: 4444,
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': { 
                args: [
                    '--whitelisted-ips', 
                    '--no-sandbox', 
                    '--disable-dev-shm-usage', 
                    '--disable-gpu', 
                    '--user-data-dir=/home/seluser/userdata'
                ],
                prefs: {
                    'directory_upgrade': true,
                    'prompt_for_download': false
                }
            },
            acceptInsecureCerts: false
        },
        // logLevel: 'info',
        // logLevel: 'warn',
        logLevel: 'error',
        waitforTimeout: 10000,
        connectionRetryTimeout: 60000,
        connectionRetryCount: 3
    });
    console.log('Connected');

    // const listener = browser.mock('**/');
    await browser.url('https://www.google.com');
})();
