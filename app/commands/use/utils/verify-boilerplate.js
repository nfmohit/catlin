/**
 * Utility function to verify a boilerplate
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import axios from 'axios';

/*
 * Verifies the availability of the boilerplate
 *
 * @param {string} boilerplate - Slug of the boilerplate.
 * @param {string} [responseType=boolean] - Type of the response.
 *
 * @returns {(object|string|boolean)} An object containing the whole response,
 * or a string containing the summary of the response or a boolean value
 */
const verifyBoilerplate = async ( boilerplate, responseType = 'boolean' ) => {
	try {
		const data = await axios.get(
			`http://catlin.local/boilerplates/${ boilerplate }`
		);
		if ( responseType === 'full' ) {
			return data;
		}
		if ( responseType === 'summary' ) {
			return `Success Status: ${ data.statusText }
Success Code: ${ data.status }`;
		}
		return true;
	} catch ( error ) {
		if ( responseType === 'full' ) {
			return error;
		}
		if ( responseType === 'summary' ) {
			return `Error Status: ${ error.response.statusText }
Error Code: ${ error.response.status }`;
		}
		return false;
	}
};

export { verifyBoilerplate };
