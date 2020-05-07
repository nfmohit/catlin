/**
 * Utility function to get questions to ask during boilerplate initialization
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import fs from 'fs';

/*
 * Gets the questions to ask for initialization
 * Contains default questions and adds question off the boilerplate
 * configuration
 *
 * @param {object} boilerplateQuestions - Object containing questions
 * from the boilerplate configuration.
 *
 * @returns {object} An object containing questions.
 */
const getQuestions = ( boilerplateQuestions ) => {
	const getBoilerplateQuestions = () => {
		if ( ! boilerplateQuestions === undefined ) {
			return boilerplateQuestions;
		}

		return boilerplateQuestions == null ? '' : boilerplateQuestions;
	};

	const currentDir = process.cwd();

	const questions = [
		{
			name: 'projectSlug',
			type: 'input',
			message: 'Project Slug:',
			validate( input ) {
				if ( ! /^([a-z\-_\d])+$/.test( input ) ) {
					return 'Project slug may only include lowercase letters,numbers, underscores and hashes.';
				}
				if ( fs.existsSync( `${ currentDir }/${ input }` ) ) {
					return 'A directory with the same slug already exists. Please enter a unique slug.';
				}
				return true;
			}
		},
		{
			name: 'projectName',
			type: 'input',
			message: 'Project Name:'
		},
		{
			name: 'projectDescription',
			type: 'input',
			message: 'Project Description:'
		},
		{
			name: 'projectAuthor',
			type: 'input',
			message: 'Project Author:'
		},
		{
			name: 'gitRepository',
			type: 'input',
			message: 'Enter Git Repository URL:'
		},
		...getBoilerplateQuestions()
	];

	return questions;
};

export { getQuestions };
