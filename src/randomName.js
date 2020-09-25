const names = require('./data/names.js');

function randomName () {
	const randomName = Math.floor(Math.random() * Math.floor(100));
	return names[randomName];
}

module.exports = randomName;
