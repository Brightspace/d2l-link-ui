'use strict';

var browsers = {
	phantomjs: new LocalBrowserFactory({
		browser: 'chrome'
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10'
	}),
	firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10'
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'SIERRA',
		/* crashes during screenshot command on > 2.24
			https://bugs.chromium.org/p/chromedriver/issues/detail?id=1770# */
		desiredCapabilities: {
			chromedriverVersion: '2.24'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA'
	})
};

var endpoint = 'http://localhost:8080/components/d2l-link/test/acceptance/link.html';
var spec = 'test/acceptance/link.gspec';

polymerTests(browsers, function(test) {
	test('link', {
		endpoint: endpoint,
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});
});
