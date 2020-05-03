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
import * as ejs from 'ejs';

/*
 * Writes the boilerplate into the file system
 *
 * @param {string} boilerplate - Slug of the boilerplate.
 * @param {buffer} download - The downloaded buffer.
 * @param {object} answers - The answers to the questions.
 * @param {object} questions - The questions.
 */
const writeBoilerplate = async (
	boilerplate,
	download,
	answers,
	questions
) => {
	try {
		const { projectSlug } = answers;
		const currentDir = process.cwd();
		fs.mkdirSync( `${ currentDir }/${ projectSlug }` );

		const replace = {};
		questions.forEach( ( question ) => {
			const thisQuestion = question.name;
			const answer = answers[ thisQuestion ];
			replace[ thisQuestion ] = answer;
		} );

		const zip = await JSZip.loadAsync( download );
		zip.folder( boilerplate ).forEach( async ( relativePath, file ) => {
			const isDir = file.dir;

			if ( ! isDir ) {
				const fileContent = await file.async( 'nodebuffer' );
				const readFileContent = fileContent.toString( 'utf-8' );
				const updatedFileContent = ejs.render(
					readFileContent,
					replace
				);
				const writePath = `${ currentDir }/${ projectSlug }/${ relativePath }`;
				fs.writeFileSync( writePath, updatedFileContent, 'utf8' );
			} else {
				fs.mkdirSync(
					`${ currentDir }/${ projectSlug }/${ relativePath }`
				);
			}
		} );

		return true;
	} catch ( error ) {
		return error;
	}
};

export { writeBoilerplate };
