/**
 * Utility function to download a boilerplate
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import ProgressBar from 'progress';

/*
 * Downloads a boilerplate
 *
 * @param {string} boilerplate - Slug of the boilerplate.
 */
const downloadBoilerplate = async ( boilerplate ) => {
	try {
		const url = `http://catlin.local/boilerplates/${ boilerplate }/downloads/${ boilerplate }.zip`;

		console.log( 'Connecting …' );

		const { data, headers } = await axios( {
			url,
			method: 'GET',
			responseType: 'stream'
		} );
		const totalLength = headers[ 'content-length' ];

		console.log( 'Starting download' );

		const progressBar = new ProgressBar(
			'-> downloading [:bar] :percent :etas',
			{
				width: 40,
				complete: '=',
				incomplete: ' ',
				renderThrottle: 1,
				total: parseInt( totalLength )
			}
		);

		const writer = fs.createWriteStream(
			path.resolve( __dirname, '../../../temp', `${ boilerplate }.zip` )
		);

		data.on( 'data', ( chunk ) => progressBar.tick( chunk.length ) );
		data.pipe( writer );
	} catch ( error ) {
		console.log(
			`An error occured!
Error Status: ${ error.response.statusText }
Error Code: ${ error.response.status }
Error Message: ${ error }`
		);
	}
};

export { downloadBoilerplate };
