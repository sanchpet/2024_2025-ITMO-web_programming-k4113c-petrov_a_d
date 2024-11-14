const availableLanguages = ['ru', 'en', 'zh', 'hi', 'pt'];
const inputLanguage = process.argv[2];

if (inputLanguage && !availableLanguages.includes(inputLanguage)) {
	console.log(`Error: language "${inputLanguage}" is not supported`);
	process.exit(1);
}

const greetingFile = `./greeting_${inputLanguage}.js`

import moment from 'moment';
import(greetingFile)
.then(({default: result}) => console.log(result))
