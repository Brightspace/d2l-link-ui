/**
`d2l-link`
Polymer-based web component for a D2L link
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import './d2l-link-behavior.js';
import './d2l-link-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-link">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline;
			}
			.d2l-link-elem, .d2l-link-elem:visited, .d2l-link-elem:active, .d2l-link-elem:link {
				@apply --d2l-link;
			}
			:host([main]) .d2l-link-elem {
				@apply --d2l-link-main;
			}
			:host([small]) .d2l-link-elem {
				@apply --d2l-link-small;
			}
			.d2l-link-elem:hover, .d2l-link-elem:focus, :host(.d2l-link-focus) .d2l-link-elem {
				@apply --d2l-link-hover;
			}

			:host-context(.d2l-dark-mode) .d2l-link-elem,
			:host-context(.d2l-dark-mode) .d2l-link-elem:visited,
			:host-context(.d2l-dark-mode) .d2l-link-elem:active,
			:host-context(.d2l-dark-mode) .d2l-link-elem:link,
			:host-context(.d2l-dark-mode) .d2l-link-elem:hover,
			:host-context(.d2l-dark-mode) .d2l-link-elem:focus {
				color: var(--d2l-color-celestine-plus-1);
			}

		</style>
		<a class="d2l-link-elem d2l-focusable" aria-label$="[[ariaLabel]]" download$="[[download]]" href$="[[href]]" hreflang="[[hreflang]]" rel="[[rel]]" target="[[target]]" type="[[type]]"><slot></slot></a>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-link',

	behaviors: [
		D2L.PolymerBehaviors.Link.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior
	],

	properties: {

		/**
		 * A string to be used as the accessible label, which overrides text content.
		 */
		ariaLabel: {
			type: String
		},

		/**
		 * When this attribute is present, a bolder style is applied.
		 */
		main: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		},

		/**
		 * When this attribute is present, the link will appear smaller.
		 */
		small: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		}

	}
});
