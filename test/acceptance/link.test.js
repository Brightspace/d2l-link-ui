'use strict';

var browsers = {
	chrome: new LocalBrowserFactory({
		browser: 'chrome'
	}),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10'
	}),
	/*edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10'
	}),*/
	/*safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'SIERRA'
	}),*/
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'SIERRA'
	})
};

var mainlineEndpoint = 'http://localhost:8081/components/d2l-link/test/acceptance/link.html';
var spec = 'test/acceptance/link.gspec';
var shadowSpec = 'test/acceptance/link.shadow.gspec';

polymerTests(browsers, function(test) {

	/* we have to force shady-DOM, because there's no way to get /deep/
	 * selectors working with Polymer 2 */
	test('mainline-button-shady', {
		endpoint: mainlineEndpoint + '?wc-shadydom=true&wc-ce=true',
		spec: spec,
		size: '1024x768',
		tags: ['desktop']
	});

});
