/**
 * Prettier configuration file.
 *
 * @author Nahid Ferdous Mohit.
 * @since  1.0.0
 */

/*
 * Dependencies
 */
const wordpressPrettierConfig = require( '@wordpress/prettier-config' );

/*
 * Prettier configuration
 */

module.exports = {
	...wordpressPrettierConfig,
	trailingComma: 'none',
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'html'
			}
		}
	]
};
