/**
 * The "use" command
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import logo from 'asciiart-logo';

/*
 * Internal dependencies
 */
import * as packageInfo from '../../../package.json';
import {
	verifyBoilerplate,
	downloadBoilerplate,
	readConfig,
	getQuestions,
	askQuestions
} from './utils';

const Use = async ( boilerplate ) => {
	console.log( logo( packageInfo ).render() );

	/*
	 * Verify the boilerplate
	 */
	const isBoilerplateVerified = await verifyBoilerplate( boilerplate );
	if ( isBoilerplateVerified ) {
		console.log( `${ boilerplate } found!` );
		const download = await downloadBoilerplate( boilerplate );
		const config = await readConfig( boilerplate, download );
		const questions = getQuestions( config.questions );
		askQuestions( questions );
	} else {
		console.log( `We couldn't find ${ boilerplate }!` );
	}
};

export default Use;
