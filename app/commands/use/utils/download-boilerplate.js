/**
 * Utility function to download a boilerplate
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import axios from 'axios';

/*
 * Downloads a boilerplate
 *
 * @param {string} boilerplate - Slug of the boilerplate.
 */
const downloadBoilerplate = async ( boilerplate ) => {
	try {
		const url = `http://catlin.local/boilerplates/${ boilerplate }/downloads/${ boilerplate }.zip`;

		const { data } = await axios( {
			url,
			method: 'GET',
			responseType: 'arraybuffer'
		} );

		const buffer = Buffer.from( data );

		return buffer;
	} catch ( error ) {
		return `Error Message: ${ error }`;
	}
};

export { downloadBoilerplate };
