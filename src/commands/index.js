/**
 * Catlin commands
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import { program } from 'commander';

/*
 * Internal dependencies
 */
import Use from './use';

const Commands = () => {
	program
		.version( '2.0.0' )
		.description(
			'An interactive command line tool that helps start your next project.'
		);

	program
		.command( 'use <boilerplate>' )
		.alias( 'u' )
		.description( 'Use a boilerplate to start your project' )
		.action( ( boilerplate ) => {
			Use( boilerplate );
		} );

	program.parse( process.argv );
};

export default Commands;
