import '../@polymer/polymer/polymer-legacy.js';
import '../d2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {
			--d2l-link: {
				color: purple;
				text-decoration: none;
				cursor: pointer;
			};
			--d2l-link-hover: {
				color: pink;
				text-decoration: underline;
				outline-width: 0;
			};
			--d2l-link-main: {
				font-weight: 700;
			};
			--d2l-link-small: {
				font-size: 0.7rem;
				line-height: 1.05rem;
				letter-spacing: 0.01rem;
			};
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
