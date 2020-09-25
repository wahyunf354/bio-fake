const faker = require('faker/locale/id_ID');

const names = () => {
	let names = [];
	for (let i = 0; i < 100; i++) {
		let name = faker.name.findName();
		names.push(name);
	}
	return names
};

module.exports = names(); 
