/**
 * Utility function to reads the configuration of a downloaded boilerplate
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import JSZip from 'jszip';

const readConfig = ( boilerplate, download ) => {
	JSZip.loadAsync( download ).then(
		( zip ) => {
			zip.file( `${ boilerplate }/.catlin.json` )
				.async( 'string' )
				.then( ( config ) => {
					return config;
				} );
		},
		function( error ) {
			return error.message;
		}
	);
};

export { readConfig };
