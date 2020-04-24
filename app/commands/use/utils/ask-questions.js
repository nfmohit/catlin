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

const askQuestions = ( questions ) => {
	const answers = prompt( questions );

	return answers;
};

export { askQuestions };
