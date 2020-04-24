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
			name: 'project-slug',
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
			name: 'project-name',
			type: 'input',
			message: 'Project Name:'
		},
		{
			name: 'project-description',
			type: 'input',
			message: 'Project Description:'
		},
		{
			name: 'project-author',
			type: 'input',
			message: 'Project Author:'
		},
		{
			name: 'git-repository',
			type: 'input',
			message: 'Enter Git Repository URL:'
		},
		...getBoilerplateQuestions()
	];

	return questions;
};

export { getQuestions };
