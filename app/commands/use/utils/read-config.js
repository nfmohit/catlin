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

/*
 * Reads the configuration of a boilerplate
 *
 * @param {string} boilerplate - Slug of the boilerplate.
 * @param {buffer} download - The downloaded buffer.
 *
 * @returns {object} An object containing the boilerplate configuration.
 */
const readConfig = async ( boilerplate, download ) => {
	try {
		const zip = await JSZip.loadAsync( download );
		const configFile = await zip
			.file( `${ boilerplate }/.catlin.json` )
			.async( 'string' );
		const config = JSON.parse( configFile );

		return config;
	} catch ( error ) {
		return error;
	}
};

export { readConfig };
