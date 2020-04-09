#!/usr/bin/env node

/**
 * The core program file
 *
 * @author Nahid Ferdous Mohit.
 * @since  1.0.0
 */

/*
 * Babel configuration
 */
require( '@babel/register' )( {
	presets: [
		[
			require.resolve( '@babel/preset-env' ),
			{
				targets: {
					node: 'current'
				}
			}
		]
	],
	ignore: [ '/node_modules/(?!catlin)/' ]
} );

/*
 * Call the source index file where the program works
 */
module.exports = require( './app/index.js' );
