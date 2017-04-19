# d2l-link
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component and [Sass](http://sass-lang.com/) mixins for a D2L link.

Links look like this:

![example screenshot of link](/screenshots/overview.png?raw=true)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-link` can be installed from [Bower][bower-url]:
```shell
bower install d2l-link
```

## Link Styles

The following link styles are available for use in your application:

### Standard

This is the standard link style, used in most cases.

![example screenshot of standard link](/screenshots/standard.png?raw=true)

### Small

Similarly styled to the standard link, but slightly smaller and more compact.

![example screenshot of small link](/screenshots/small.png?raw=true)

### Main

Same size as the standard link, but bolder.

![example screenshot of main link](/screenshots/main.png?raw=true)

## Usage

Link styles can be applied using either a [Polymer](https://www.polymer-project.org/1.0/) web component or [Sass](http://sass-lang.com/) mixins. Which one you use depends on your technology stack and comfort with each.

### Sass

Import the `d2l-link.scss` file into your application's Sass. Then apply the `d2l-link()` mixin to your link elements:

```sass
@import 'bower_components/d2l-link/d2l-link.scss';

.my-link {
	@include d2l-link();
}
```

The `small` and `main` styles can be applied by adding corresponding attributes to the HTML markup:

```html
<a href="foo.html" class="my-link">D2L Link</a>
<a href="foo.html" class="my-link" small>Small Link</a>
<a href="foo.html" class="my-link" main>Main Link</a>
```

### Polymer

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-link.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../d2l-link/d2l-link.html">
</head>
```

The native `<a>` element can now be extended to be a `d2l-link` with the `is="d2l-link"` attribute. Similarly to Sass, the `small` and `main` link styles can be achieved by adding their corresponding attributes:

```html
<a href="foo.html" is="d2l-link">D2L Link</a>
<a href="foo.html" is="d2l-link" small>Small Link</a>
<a href="foo.html" is="d2l-link" main>Main Link</a>
```

## Testing

There are 3 stages of tests which run with `npm test`:

1. Linting: lints the web component using [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli#lint) and everything else using [eslint's HTML plugin](https://www.npmjs.com/package/eslint-plugin-html)
2. Web Component Tests: found in `test\index.html`, this runs basic [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli#tests) tests
3. Galen Tests: Found in `test\acceptance`, these test the resolved CSS using the [Galen Framework](http://galenframework.com/).

### Dumping Galen Output

The output of the Galen tests can be dumped using the command `npm run galen:local:dump`. Screenshots of the test objects will be put in `test\acceptance\dumps`, and can be used to perform perceptual diffs before/after any changes. The  "baseline" version should be committed to source control.

## Coding styles

See the [Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-link
[bower-image]: https://img.shields.io/bower/v/d2l-link.svg
[ci-image]: https://travis-ci.org/BrightspaceUI/link.svg?branch=master
[ci-url]: https://travis-ci.org/BrightspaceUI/link
