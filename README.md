# Catlin

> An interactive command line tool that helps start your next project.

[![Node.js version](https://img.shields.io/node/v/catlin?style=for-the-badge)](https://nodejs.org) [![catlin](https://img.shields.io/npm/v/catlin?style=for-the-badge)](https://www.npmjs.com/package/catlin/)

### Description
I built Catlin to overcome the necessity of copying a boilerplate and change starter details on it every time me or my team started a new project. This simple and interactive cli-tool packs useful boilerplates which are output with dynamic values specific to each project.

### Use Cases
Catlin is used by my myself and my team (of course, you are welcome to use it as well, it is open-source) when a new project is started. It asks a couple of questions during initiation generating dynamic values that are put in the output project files. As a result, you do not have to go inside the files and set unique details for each project.

### Core Features

 - Serves the purpose of a boilerplate implementation tool.
 - Fills in the unique project details itself automatically based on the answer of the questions during the initiation period.
 - Initialises Git and makes the first commit.

### Requirements
Catlin requires [NodeJS](https://nodejs.org/en/download/) version 8.3.0 (minimum) but using the LTS version is always appreciated.

### Installation
In order to install, please run the following command in your command line:

`npm install -g catlin`

For global installation, you'll need to have administrator privileges. You can use `sudo` for that purpose, e.g. `sudo npm install -g catlin`.

### Usage
Catlin only provides one command for now:

`catlin`

Once you run this command on a folder, it will ask for some details based on which, it will prepare your next project to get started immediately without having to spend hours and configure everything manually.

**Note:** You need to have an _empty_ Git repository with push permissions in order to be able to initialise Git successfully. At this moment, the program throws an error if this is not done before starting (everything except the Git initialisation gets done, though). This behaviour is going to change in the upcoming release. The current version works well for my team's workflow.

### Boilerplates
Catlin currently packs boilerplates for the following type of projects:

1. Static HTML (with Webpack + SASS + Bootstrap + FontAwesome built-in).

#### Coming soon:

1. WordPress theme development boilerplate.
2. WordPress plugin development boilerplate.
3. ReactJS boilerplate.

### Background
Previously, when starting a new project, me and my team had to copy a boilerplate code, change the details (e.g. project name, description, author, GitHub repository) and initialise the Git repository, all manually. This used to take a long amount of time and effort. Thus came the necessity of a tool like Catlin, which would do all these for us automatically.

### Credits

Catlin uses:

1.  [Inquirer](https://www.npmjs.com/package/inquirer) to ask interactive questions.
2. [EJS](https://www.npmjs.com/package/ejs) to input dynamic values inside the project templates.
3. [Simple Git](https://www.npmjs.com/package/simple-git) for Git support.
4. [Babel](https://babeljs.io/) for transforming ES6 into machine readable code.
5. [ASCII-art Logo](https://www.npmjs.com/package/asciiart-logo) for the app splash screen.

This project is heavily inspired by [this post from Harriet Ryder](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309).

### Sponsor
You can sponsor this project and support my open-source development by [becoming a Patron](https://www.patreon.com/nfmohit)!
