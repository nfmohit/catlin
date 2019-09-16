/**
 * File where the program works
 */

/*
 * Import dependencies
 */

import { prompt } from 'inquirer';
import {
	readdirSync,
	mkdirSync,
	statSync,
	readFileSync,
	writeFileSync,
	existsSync
} from 'fs';
import * as ejs from 'ejs';
import * as config from './../package.json';
import path from 'path';
import logo from 'asciiart-logo';
import simplegit from 'simple-git/promise';

/*
 * Display the ascii artwork
 */

console.log( logo( config ).render() );

/*
 * Define variables (questions, project type 
 * choices and current directory)
 */

const choices = readdirSync( path.join( __dirname, '..', 'templates' ) );

const currentDir = process.cwd();

const questions = [
	{
		name: 'project-choice',
		type: 'list',
		message: 'What kind of project would you like to start?',
		choices: choices
	},
	{
		name: 'project-slug',
		type: 'input',
		message: 'Project Slug:',
		validate: function ( input ) {
			if ( ! /^([a-z\-\_\d])+$/.test( input ) ) {
				return 'Project slug may only include lowercase letters, numbers, underscores and hashes.';
			} else if ( existsSync( `${ currentDir }/${ input }` ) ) {
				return 'A directory with the same slug already exists. Please enter a unique slug.';
			} else {
				return true;
			}
		}
	},
	{
		name: 'project-name',
		type: 'input',
		message: 'Project Name:',
	},
	{
		name: 'project-description',
		type: 'input',
		message: 'Project Description:',
	},
	{
		name: 'git-repository',
		type: 'input',
		message: 'Enter Git Repository URL:',
	},
	{
		name: 'project-author',
		type: 'input',
		message: 'Project Author:',
	}
];

/*
 * Run inquirer
 */

prompt( questions )
	.then( answers => {
		const projectChoice = answers[ 'project-choice' ];
		const projectSlug = answers[ 'project-slug' ];
		const projectName = answers[ 'project-name' ];
		const projectDesc = answers[ 'project-description' ];
		const projectAuthor = answers[ 'project-author' ];
		const gitRepo = answers[ 'git-repository' ];
		const templatePath = path.join( __dirname, '..', 'templates', projectChoice );

		mkdirSync( `${ currentDir }/${ projectSlug }` );

		createDirectoryContents( templatePath, projectSlug, projectName, projectDesc, projectAuthor, gitRepo );

		initializeGit( projectSlug, gitRepo );

	} );

/*
 * Function to create the new directory
 */

const createDirectoryContents = ( templatePath, projectSlug, projectName, projectDesc, projectAuthor, gitRepo ) => {

	const filesToCreate = readdirSync( templatePath );

	filesToCreate.forEach( file => {
		const origFilePath = `${ templatePath }/${ file }`;

		// Get stats about the current file
		const stats = statSync( origFilePath );

		if ( stats.isFile() ) {

			const replace = { 
				projectSlug: projectSlug,
				projectName: projectName,
				projectDesc: projectDesc,
				gitRepo: gitRepo,
				projectAuthor: projectAuthor
			};
			const fileContent = readFileSync( origFilePath, 'utf8' );
			const contents = ejs.render( fileContent, replace );
			if ( file === '.npmignore' ) file = '.gitignore';
			const writePath = `${ currentDir }/${ projectSlug }/${ file }`;
			writeFileSync( writePath, contents, 'utf8' );

		} else if ( stats.isDirectory() ) {

			mkdirSync( `${ currentDir }/${ projectSlug }/${ file }` );

			// Recursive call
			createDirectoryContents( `${ templatePath }/${ file }`, `${ projectSlug }/${ file }` );
		}
	});
}

/*
 * Git initialization
 */

const initializeGit = ( projectSlug, gitRepo ) => {
	const git = simplegit( `${ currentDir }/${ projectSlug }` );
	git.init();
	git.add( './*' );
	git.commit( 'Boilerplate initialized by Catlin' );
	git.addRemote( 'origin', gitRepo + '.git' );
	git.push( 'origin', 'master' );
}
