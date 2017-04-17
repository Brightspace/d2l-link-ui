**Looking for SASS-based `d2l-link`?** It's [over here](https://github.com/BrightspaceUI/link/tree/sass).

# d2l-link
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component D2L link element.

Links look like this:

![example screenshot of link](/screenshots/overview.png?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-link` can be installed from [Bower][bower-url]:
```shell
bower install d2l-link
```
## Usage

### Standard Links

For most situations requiring a link:

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-link.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-link/d2l-link.html">
</head>
```

The native `<a>` element can now be extended to be a `d2l-link`:

```html
<a href="foo.html" is="d2l-link">Take me to Foo</a>
```

Result:

![example screenshot of standard link](/screenshots/standard.png?raw=true)

### Main Links

For links which require more emphasis:

Follow the steps above for a standard link and include the boolean attribute `main`.

```html
<a href="ultimate-foo.html" is="d2l-link" main>Take me to the ultimate Foo!</a>
```

Result:

![example screenshot of main link](/screenshots/main.png?raw=true)

### Small Links

For links that should take up less space:

Follow the steps above for a standard link and include the boolean attribute `small`.

```html
<a href="small-foo.html" is="d2l-link" small>This way to Foo</a>
```

## Running tests locally in Windows

Tests in this repo use web-component-tester (WCT). Currently WCT has an issue in Windows with tests taking about a minute to start.  A workaround is to set two environment variables for Launchpad (a library used by WCT).  These help bypass browser searching which is what causes the delay.  For example:
LAUNCHPAD_BROWSERS=CHROME
LAUNCHPAD_CHROME-'C:\Program Files (x86)\Google\Chrome\Application'

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-link
[bower-image]: https://img.shields.io/bower/v/d2l-link.svg
[ci-image]: https://travis-ci.org/BrightspaceUI/link.svg?branch=master
[ci-url]: https://travis-ci.org/BrightspaceUI/link
