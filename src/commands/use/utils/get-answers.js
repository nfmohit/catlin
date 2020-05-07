/**
 * Utility function to ask questions during boilerplate initialization
 *
 * @author Nahid Ferdous Mohit.
 * @since  2.0.0
 */

/*
 * External dependencies
 */
import { prompt } from 'inquirer';

/*
 * Asks the questions during initialization
 *
 * @param {object} questions - An object containing all the questions.
 *
 * @returns {object} An object containing answers to the questions.
 */
const getAnswers = async ( questions ) => {
	try {
		const answers = await prompt( questions );
		return answers;
	} catch ( error ) {
		return error;
	}
};

export { getAnswers };
