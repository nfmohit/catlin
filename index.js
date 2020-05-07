#!/usr/bin/env node

/**
 * The core program file
 *
 * @author Nahid Ferdous Mohit.
 * @since  1.0.0
 */

/*
 * External dependencies
 */

/* For better ES6 support */
require( 'core-js/stable' );
require( 'regenerator-runtime/runtime' );

/*
 * Call the source index file where the program works
 */
module.exports = require( './dist/index.js' );
