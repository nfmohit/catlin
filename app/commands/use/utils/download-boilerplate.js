import fs from 'fs';
import path from 'path';
import axios from 'axios';
import ProgressBar from 'progress';

async function downloadBoilerplate( boilerplate ) {
	const url = `http://catlin.local/boilerplates/${ boilerplate }/downloads/${ boilerplate }.zip`;

	console.log( 'Connecting…' );
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
		path.resolve(
			__dirname,
			'../../../../templates',
			`${ boilerplate }.zip`
		)
	);

	data.on( 'data', ( chunk ) => progressBar.tick( chunk.length ) );
	data.pipe( writer );
}

export { downloadBoilerplate };
