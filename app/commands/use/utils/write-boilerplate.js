/**
 * Utility function to write the boilerplate in user's file system
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import JSZip from 'jszip';
import fs from 'fs';

const writeBoilerplate = ( boilerplate, download ) => {
	JSZip.loadAsync( download ).then(
		( zip ) => {
			zip.folder( boilerplate ).forEach( ( relativePath, file ) => {
				file.async( 'nodebuffer' ).then( ( fileContent ) => {
					if ( ! file.dir ) {
						console.log( `${ relativePath } is a file` );
						fs.writeFileSync(
							`${ process.cwd() }/tests/${ relativePath }`,
							fileContent,
							'utf8'
						);
					} else if ( file.dir ) {
						console.log( `${ relativePath } is a directory` );
						fs.mkdirSync(
							`${ process.cwd() }/tests/${ relativePath }`
						);
						fs.writeFileSync(
							`${ process.cwd() }/tests/${ relativePath }`,
							fileContent,
							'utf8'
						);
					}
				} );
			} );
		},
		function( error ) {
			return error.message;
		}
	);
};

export { writeBoilerplate };
