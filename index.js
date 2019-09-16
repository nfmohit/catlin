#!/usr/bin/env node

/**
 * The core program file
 */

/*
 * Babel configuration
 */

require( '@babel/register' ) ( {
	presets: [
		[
			require.resolve( '@babel/preset-env' ),
			{
				"targets": {
					"node": "current"
				}
			}
		]
	],
	ignore: [ '/node_modules\/(?!catlin)/' ]
});

/*
 * Call the source index file where the program works
 */

module.exports = require( './src/index.js' )
