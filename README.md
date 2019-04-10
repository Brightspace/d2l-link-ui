# d2l-link
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/link)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component and [Sass](http://sass-lang.com/) mixins for a D2L link.

Links look like this:

![example screenshot of link](/screenshots/overview.png?raw=true)

For further information on this and other components, refer to [The Brightspace UI Guide](https://github.com/BrightspaceUI/guide/wiki).

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

Link styles can be applied using either a [Polymer](https://www.polymer-project.org/) web component or [Sass](http://sass-lang.com/) mixins. Which one you use depends on your technology stack and comfort with each.

### Polymer

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-link.html`:

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="d2l-link.html">
</head>
```

The native `<a>` element can now be replaced with `<d2l-link>`. Similarly to Sass, the `small` and `main` link styles can be achieved by adding their corresponding attributes:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-link.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-link {
        display: inline-block;
        margin-right: 15px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-link href="foo.html">D2L Link</d2l-link>
<d2l-link href="foo.html" small>Small Link</d2l-link>
<d2l-link href="foo.html" main>Main Link</d2l-link>
```

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

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To run [Galen Tests](http://galenframework.com/), which test the resolved CSS:

```shell
npm run galen:local:run
```

To lint AND run local unit tests AND Galen tests:

```shell
npm test
```

### Dumping Galen Output

The output of the Galen tests can be dumped using the command `npm run galen:local:dump`. Screenshots of the test objects will be put in `test\acceptance\dumps`, and can be used to perform perceptual diffs before/after any changes. The  "baseline" version should be committed to source control.

[bower-url]: http://bower.io/search/?q=d2l-link
[bower-image]: https://badge.fury.io/bo/d2l-link.svg
[ci-image]: https://travis-ci.org/BrightspaceUI/link.svg?branch=master
[ci-url]: https://travis-ci.org/BrightspaceUI/link

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.
