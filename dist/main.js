/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, bin, engines, dependencies, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, husky, lint-staged, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"catlin\\\",\\\"version\\\":\\\"1.0.1\\\",\\\"description\\\":\\\"An interactive command line tool that helps start your next project.\\\",\\\"main\\\":\\\"./index.js\\\",\\\"bin\\\":{\\\"catlin\\\":\\\"./index.js\\\"},\\\"engines\\\":{\\\"node\\\":\\\">=8.3.0\\\"},\\\"dependencies\\\":{\\\"@babel/core\\\":\\\"^7.6.0\\\",\\\"@babel/preset-env\\\":\\\"^7.6.0\\\",\\\"@babel/register\\\":\\\"^7.6.0\\\",\\\"asciiart-logo\\\":\\\"^0.2.6\\\",\\\"ejs\\\":\\\"^2.7.1\\\",\\\"inquirer\\\":\\\"^7.0.0\\\",\\\"simple-git\\\":\\\"^1.126.0\\\"},\\\"scripts\\\":{\\\"catlin\\\":\\\"node ./index.js\\\",\\\"lint\\\":\\\"concurrently \\\\\\\"npm run lint-js\\\\\\\" \\\\\\\"npm run format\\\\\\\"\\\",\\\"lint:fix\\\":\\\"concurrently \\\\\\\"npm run lint-js:fix\\\\\\\" \\\\\\\"npm run format:fix\\\\\\\"\\\",\\\"lint-js\\\":\\\"eslint \\\\\\\"**/*.js\\\\\\\"\\\",\\\"lint-js:fix\\\":\\\"eslint \\\\\\\"**/*.js\\\\\\\" --fix\\\",\\\"format\\\":\\\"prettier --check \\\\\\\"**/*.{json,md}\\\\\\\"\\\",\\\"format:fix\\\":\\\"prettier --write \\\\\\\"**/*.{json,md}\\\\\\\"\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/nfmohit-wpmudev/catlin.git\\\"},\\\"keywords\\\":[\\\"boilerplate\\\",\\\"template\\\",\\\"starter\\\"],\\\"author\\\":\\\"Nahid Ferdous Mohit\\\",\\\"license\\\":\\\"MIT\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/nfmohit-wpmudev/catlin/issues\\\"},\\\"homepage\\\":\\\"https://nahid.dev/project/catlin\\\",\\\"devDependencies\\\":{\\\"@wordpress/eslint-plugin\\\":\\\"^4.1.0\\\",\\\"@wordpress/prettier-config\\\":\\\"^0.1.0\\\",\\\"concurrently\\\":\\\"^5.1.0\\\",\\\"eslint\\\":\\\"^6.8.0\\\",\\\"eslint-config-airbnb-base\\\":\\\"^14.1.0\\\",\\\"eslint-config-prettier\\\":\\\"^6.10.1\\\",\\\"eslint-plugin-import\\\":\\\"^2.20.2\\\",\\\"eslint-plugin-prettier\\\":\\\"^3.1.2\\\",\\\"husky\\\":\\\"^4.2.3\\\",\\\"lint-staged\\\":\\\"^10.1.2\\\",\\\"prettier\\\":\\\"npm:wp-prettier@^1.19.1\\\"},\\\"husky\\\":{\\\"hooks\\\":{\\\"pre-commit\\\":\\\"lint-staged\\\"}},\\\"lint-staged\\\":{\\\"*.js\\\":\\\"eslint --fix\\\",\\\"*.{css,scss,sass}\\\":\\\"stylelint --fix\\\",\\\"*.{html,json,md}\\\":\\\"prettier --write\\\"}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inquirer */ \"inquirer\");\n/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var asciiart_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! asciiart-logo */ \"asciiart-logo\");\n/* harmony import */ var asciiart_logo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(asciiart_logo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var simple_git_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-git/promise */ \"simple-git/promise\");\n/* harmony import */ var simple_git_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simple_git_promise__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n/**\n * File where the program works\n */\n\n/*\n * Import dependencies\n */\n\n\n\n\n\n\n\n/*\n * Display the ascii artwork\n */\n\nconsole.log(asciiart_logo__WEBPACK_IMPORTED_MODULE_4___default()(_package_json__WEBPACK_IMPORTED_MODULE_6___namespace).render());\n/*\n * Define variables (questions, project type\n * choices and current directory)\n */\n\nconst choices = Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"readdirSync\"])(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, '..', 'templates'));\nconst currentDir = process.cwd();\nconst questions = [{\n  name: 'project-choice',\n  type: 'list',\n  message: 'What kind of project would you like to start?',\n  choices\n}, {\n  name: 'project-slug',\n  type: 'input',\n  message: 'Project Slug:',\n\n  validate(input) {\n    if (!/^([a-z\\-_\\d])+$/.test(input)) {\n      return 'Project slug may only include lowercase letters,numbers, underscores and hashes.';\n    }\n\n    if (Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(`${currentDir}/${input}`)) {\n      return 'A directory with the same slug already exists. Please enter a unique slug.';\n    }\n\n    return true;\n  }\n\n}, {\n  name: 'project-name',\n  type: 'input',\n  message: 'Project Name:'\n}, {\n  name: 'project-description',\n  type: 'input',\n  message: 'Project Description:'\n}, {\n  name: 'git-repository',\n  type: 'input',\n  message: 'Enter Git Repository URL:'\n}, {\n  name: 'project-author',\n  type: 'input',\n  message: 'Project Author:'\n}];\n/*\n * Function to create the new directory\n */\n\nconst createDirectoryContents = (templatePath, projectSlug, projectName, projectDesc, projectAuthor, gitRepo) => {\n  const filesToCreate = Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"readdirSync\"])(templatePath);\n  filesToCreate.forEach(file => {\n    const origFilePath = `${templatePath}/${file}`; // Get stats about the current file\n\n    const stats = Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"statSync\"])(origFilePath);\n\n    if (stats.isFile()) {\n      const replace = {\n        projectSlug,\n        projectName,\n        projectDesc,\n        gitRepo,\n        projectAuthor\n      };\n      const fileContent = Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"readFileSync\"])(origFilePath, 'utf8');\n      const contents = ejs__WEBPACK_IMPORTED_MODULE_2__[\"render\"](fileContent, replace); // (temporary)\n      // eslint-disable-next-line no-param-reassign\n\n      if (file === '.npmignore') file = '.gitignore';\n      const writePath = `${currentDir}/${projectSlug}/${file}`;\n      Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"writeFileSync\"])(writePath, contents, 'utf8');\n    } else if (stats.isDirectory()) {\n      Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"mkdirSync\"])(`${currentDir}/${projectSlug}/${file}`); // Recursive call\n\n      createDirectoryContents(`${templatePath}/${file}`, `${projectSlug}/${file}`);\n    }\n  });\n};\n/*\n * Git initialization\n */\n\n\nconst initializeGit = (projectSlug, gitRepo) => {\n  const git = simple_git_promise__WEBPACK_IMPORTED_MODULE_5___default()(`${currentDir}/${projectSlug}`);\n  git.init();\n  git.add('./*');\n  git.commit('Boilerplate initialized by Catlin');\n  git.addRemote('origin', `${gitRepo}.git`);\n  git.push('origin', 'master');\n};\n/*\n * Run inquirer\n */\n\n\nObject(inquirer__WEBPACK_IMPORTED_MODULE_0__[\"prompt\"])(questions).then(answers => {\n  const projectChoice = answers['project-choice'];\n  const projectSlug = answers['project-slug'];\n  const projectName = answers['project-name'];\n  const projectDesc = answers['project-description'];\n  const projectAuthor = answers['project-author'];\n  const gitRepo = answers['git-repository'];\n  const templatePath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(__dirname, '..', 'templates', projectChoice);\n  Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"mkdirSync\"])(`${currentDir}/${projectSlug}`);\n  createDirectoryContents(templatePath, projectSlug, projectName, projectDesc, projectAuthor, gitRepo);\n  initializeGit(projectSlug, gitRepo);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibG9nbyIsImNvbmZpZyIsInJlbmRlciIsImNob2ljZXMiLCJyZWFkZGlyU3luYyIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiY3VycmVudERpciIsInByb2Nlc3MiLCJjd2QiLCJxdWVzdGlvbnMiLCJuYW1lIiwidHlwZSIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZSIsImlucHV0IiwidGVzdCIsImV4aXN0c1N5bmMiLCJjcmVhdGVEaXJlY3RvcnlDb250ZW50cyIsInRlbXBsYXRlUGF0aCIsInByb2plY3RTbHVnIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0RGVzYyIsInByb2plY3RBdXRob3IiLCJnaXRSZXBvIiwiZmlsZXNUb0NyZWF0ZSIsImZvckVhY2giLCJmaWxlIiwib3JpZ0ZpbGVQYXRoIiwic3RhdHMiLCJzdGF0U3luYyIsImlzRmlsZSIsInJlcGxhY2UiLCJmaWxlQ29udGVudCIsInJlYWRGaWxlU3luYyIsImNvbnRlbnRzIiwiZWpzIiwid3JpdGVQYXRoIiwid3JpdGVGaWxlU3luYyIsImlzRGlyZWN0b3J5IiwibWtkaXJTeW5jIiwiaW5pdGlhbGl6ZUdpdCIsImdpdCIsInNpbXBsZWdpdCIsImluaXQiLCJhZGQiLCJjb21taXQiLCJhZGRSZW1vdGUiLCJwdXNoIiwicHJvbXB0IiwidGhlbiIsImFuc3dlcnMiLCJwcm9qZWN0Q2hvaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBOzs7QUFJQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhQyxvREFBSSxDQUFFQyxvREFBRixDQUFKLENBQWVDLE1BQWYsRUFBYjtBQUVBOzs7OztBQUtB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c0IsRUFLdEJDLGFBTHNCLEVBTXRCQyxPQU5zQixDQUF2QjtBQVNBaUIsZUFBYSxDQUFFckIsV0FBRixFQUFlSSxPQUFmLENBQWI7QUFDQSxDQTFCRCxFIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIHdoZXJlIHRoZSBwcm9ncmFtIHdvcmtzXG4gKi9cblxuLypcbiAqIEltcG9ydCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tICdpbnF1aXJlcic7XG5pbXBvcnQge1xuXHRyZWFkZGlyU3luYyxcblx0bWtkaXJTeW5jLFxuXHRzdGF0U3luYyxcblx0cmVhZEZpbGVTeW5jLFxuXHR3cml0ZUZpbGVTeW5jLFxuXHRleGlzdHNTeW5jXG59IGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGVqcyBmcm9tICdlanMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9nbyBmcm9tICdhc2NpaWFydC1sb2dvJztcbmltcG9ydCBzaW1wbGVnaXQgZnJvbSAnc2ltcGxlLWdpdC9wcm9taXNlJztcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vKlxuICogRGlzcGxheSB0aGUgYXNjaWkgYXJ0d29ya1xuICovXG5cbmNvbnNvbGUubG9nKCBsb2dvKCBjb25maWcgKS5yZW5kZXIoKSApO1xuXG4vKlxuICogRGVmaW5lIHZhcmlhYmxlcyAocXVlc3Rpb25zLCBwcm9qZWN0IHR5cGVcbiAqIGNob2ljZXMgYW5kIGN1cnJlbnQgZGlyZWN0b3J5KVxuICovXG5cbmNvbnN0IGNob2ljZXMgPSByZWFkZGlyU3luYyggcGF0aC5qb2luKCBfX2Rpcm5hbWUsICcuLicsICd0ZW1wbGF0ZXMnICkgKTtcblxuY29uc3QgY3VycmVudERpciA9IHByb2Nlc3MuY3dkKCk7XG5cbmNvbnN0IHF1ZXN0aW9ucyA9IFtcblx0e1xuXHRcdG5hbWU6ICdwcm9qZWN0LWNob2ljZScsXG5cdFx0dHlwZTogJ2xpc3QnLFxuXHRcdG1lc3NhZ2U6ICdXaGF0IGtpbmQgb2YgcHJvamVjdCB3b3VsZCB5b3UgbGlrZSB0byBzdGFydD8nLFxuXHRcdGNob2ljZXNcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdwcm9qZWN0LXNsdWcnLFxuXHRcdHR5cGU6ICdpbnB1dCcsXG5cdFx0bWVzc2FnZTogJ1Byb2plY3QgU2x1ZzonLFxuXHRcdHZhbGlkYXRlKCBpbnB1dCApIHtcblx0XHRcdGlmICggISAvXihbYS16XFwtX1xcZF0pKyQvLnRlc3QoIGlucHV0ICkgKSB7XG5cdFx0XHRcdHJldHVybiAnUHJvamVjdCBzbHVnIG1heSBvbmx5IGluY2x1ZGUgbG93ZXJjYXNlIGxldHRlcnMsbnVtYmVycywgdW5kZXJzY29yZXMgYW5kIGhhc2hlcy4nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBleGlzdHNTeW5jKCBgJHsgY3VycmVudERpciB9LyR7IGlucHV0IH1gICkgKSB7XG5cdFx0XHRcdHJldHVybiAnQSBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBzbHVnIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgZW50ZXIgYSB1bmlxdWUgc2x1Zy4nO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtbmFtZScsXG5cdFx0dHlwZTogJ2lucHV0Jyxcblx0XHRtZXNzYWdlOiAnUHJvamVjdCBOYW1lOidcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdwcm9qZWN0LWRlc2NyaXB0aW9uJyxcblx0XHR0eXBlOiAnaW5wdXQnLFxuXHRcdG1lc3NhZ2U6ICdQcm9qZWN0IERlc2NyaXB0aW9uOidcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdnaXQtcmVwb3NpdG9yeScsXG5cdFx0dHlwZTogJ2lucHV0Jyxcblx0XHRtZXNzYWdlOiAnRW50ZXIgR2l0IFJlcG9zaXRvcnkgVVJMOidcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdwcm9qZWN0LWF1dGhvcicsXG5cdFx0dHlwZTogJ2lucHV0Jyxcblx0XHRtZXNzYWdlOiAnUHJvamVjdCBBdXRob3I6J1xuXHR9XG5dO1xuXG4vKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBuZXcgZGlyZWN0b3J5XG4gKi9cblxuY29uc3QgY3JlYXRlRGlyZWN0b3J5Q29udGVudHMgPSAoXG5cdHRlbXBsYXRlUGF0aCxcblx0cHJvamVjdFNsdWcsXG5cdHByb2plY3ROYW1lLFxuXHRwcm9qZWN0RGVzYyxcblx0cHJvamVjdEF1dGhvcixcblx0Z2l0UmVwb1xuKSA9PiB7XG5cdGNvbnN0IGZpbGVzVG9DcmVhdGUgPSByZWFkZGlyU3luYyggdGVtcGxhdGVQYXRoICk7XG5cblx0ZmlsZXNUb0NyZWF0ZS5mb3JFYWNoKCAoIGZpbGUgKSA9PiB7XG5cdFx0Y29uc3Qgb3JpZ0ZpbGVQYXRoID0gYCR7IHRlbXBsYXRlUGF0aCB9LyR7IGZpbGUgfWA7XG5cblx0XHQvLyBHZXQgc3RhdHMgYWJvdXQgdGhlIGN1cnJlbnQgZmlsZVxuXHRcdGNvbnN0IHN0YXRzID0gc3RhdFN5bmMoIG9yaWdGaWxlUGF0aCApO1xuXG5cdFx0aWYgKCBzdGF0cy5pc0ZpbGUoKSApIHtcblx0XHRcdGNvbnN0IHJlcGxhY2UgPSB7XG5cdFx0XHRcdHByb2plY3RTbHVnLFxuXHRcdFx0XHRwcm9qZWN0TmFtZSxcblx0XHRcdFx0cHJvamVjdERlc2MsXG5cdFx0XHRcdGdpdFJlcG8sXG5cdFx0XHRcdHByb2plY3RBdXRob3Jcblx0XHRcdH07XG5cdFx0XHRjb25zdCBmaWxlQ29udGVudCA9IHJlYWRGaWxlU3luYyggb3JpZ0ZpbGVQYXRoLCAndXRmOCcgKTtcblx0XHRcdGNvbnN0IGNvbnRlbnRzID0gZWpzLnJlbmRlciggZmlsZUNvbnRlbnQsIHJlcGxhY2UgKTtcblx0XHRcdC8vICh0ZW1wb3JhcnkpXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHRcdGlmICggZmlsZSA9PT0gJy5ucG1pZ25vcmUnICkgZmlsZSA9ICcuZ2l0aWdub3JlJztcblx0XHRcdGNvbnN0IHdyaXRlUGF0aCA9IGAkeyBjdXJyZW50RGlyIH0vJHsgcHJvamVjdFNsdWcgfS8keyBmaWxlIH1gO1xuXHRcdFx0d3JpdGVGaWxlU3luYyggd3JpdGVQYXRoLCBjb250ZW50cywgJ3V0ZjgnICk7XG5cdFx0fSBlbHNlIGlmICggc3RhdHMuaXNEaXJlY3RvcnkoKSApIHtcblx0XHRcdG1rZGlyU3luYyggYCR7IGN1cnJlbnREaXIgfS8keyBwcm9qZWN0U2x1ZyB9LyR7IGZpbGUgfWAgKTtcblxuXHRcdFx0Ly8gUmVjdXJzaXZlIGNhbGxcblx0XHRcdGNyZWF0ZURpcmVjdG9yeUNvbnRlbnRzKFxuXHRcdFx0XHRgJHsgdGVtcGxhdGVQYXRoIH0vJHsgZmlsZSB9YCxcblx0XHRcdFx0YCR7IHByb2plY3RTbHVnIH0vJHsgZmlsZSB9YFxuXHRcdFx0KTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbi8qXG4gKiBHaXQgaW5pdGlhbGl6YXRpb25cbiAqL1xuXG5jb25zdCBpbml0aWFsaXplR2l0ID0gKCBwcm9qZWN0U2x1ZywgZ2l0UmVwbyApID0+IHtcblx0Y29uc3QgZ2l0ID0gc2ltcGxlZ2l0KCBgJHsgY3VycmVudERpciB9LyR7IHByb2plY3RTbHVnIH1gICk7XG5cdGdpdC5pbml0KCk7XG5cdGdpdC5hZGQoICcuLyonICk7XG5cdGdpdC5jb21taXQoICdCb2lsZXJwbGF0ZSBpbml0aWFsaXplZCBieSBDYXRsaW4nICk7XG5cdGdpdC5hZGRSZW1vdGUoICdvcmlnaW4nLCBgJHsgZ2l0UmVwbyB9LmdpdGAgKTtcblx0Z2l0LnB1c2goICdvcmlnaW4nLCAnbWFzdGVyJyApO1xufTtcblxuLypcbiAqIFJ1biBpbnF1aXJlclxuICovXG5cbnByb21wdCggcXVlc3Rpb25zICkudGhlbiggKCBhbnN3ZXJzICkgPT4ge1xuXHRjb25zdCBwcm9qZWN0Q2hvaWNlID0gYW5zd2Vyc1sgJ3Byb2plY3QtY2hvaWNlJyBdO1xuXHRjb25zdCBwcm9qZWN0U2x1ZyA9IGFuc3dlcnNbICdwcm9qZWN0LXNsdWcnIF07XG5cdGNvbnN0IHByb2plY3ROYW1lID0gYW5zd2Vyc1sgJ3Byb2plY3QtbmFtZScgXTtcblx0Y29uc3QgcHJvamVjdERlc2MgPSBhbnN3ZXJzWyAncHJvamVjdC1kZXNjcmlwdGlvbicgXTtcblx0Y29uc3QgcHJvamVjdEF1dGhvciA9IGFuc3dlcnNbICdwcm9qZWN0LWF1dGhvcicgXTtcblx0Y29uc3QgZ2l0UmVwbyA9IGFuc3dlcnNbICdnaXQtcmVwb3NpdG9yeScgXTtcblx0Y29uc3QgdGVtcGxhdGVQYXRoID0gcGF0aC5qb2luKFxuXHRcdF9fZGlybmFtZSxcblx0XHQnLi4nLFxuXHRcdCd0ZW1wbGF0ZXMnLFxuXHRcdHByb2plY3RDaG9pY2Vcblx0KTtcblxuXHRta2RpclN5bmMoIGAkeyBjdXJyZW50RGlyIH0vJHsgcHJvamVjdFNsdWcgfWAgKTtcblxuXHRjcmVhdGVEaXJlY3RvcnlDb250ZW50cyhcblx0XHR0ZW1wbGF0ZVBhdGgsXG5cdFx0cHJvamVjdFNsdWcsXG5cdFx0cHJvamVjdE5hbWUsXG5cdFx0cHJvamVjdERlc2MsXG5cdFx0cHJvamVjdEF1dGhvcixcblx0XHRnaXRSZXBvXG5cdCk7XG5cblx0aW5pdGlhbGl6ZUdpdCggcHJvamVjdFNsdWcsIGdpdFJlcG8gKTtcbn0gKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "asciiart-logo":
/*!********************************!*\
  !*** external "asciiart-logo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"asciiart-logo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc2NpaWFydC1sb2dvXCI/ZGIwYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhc2NpaWFydC1sb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNjaWlhcnQtbG9nb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///asciiart-logo\n");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlanNcIj81MmRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ejs\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnF1aXJlclwiPzc1MjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaW5xdWlyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///inquirer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "simple-git/promise":
/*!*************************************!*\
  !*** external "simple-git/promise" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"simple-git/promise\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW1wbGUtZ2l0L3Byb21pc2VcIj9lNzFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InNpbXBsZS1naXQvcHJvbWlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbXBsZS1naXQvcHJvbWlzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///simple-git/promise\n");

/***/ })

/******/ });