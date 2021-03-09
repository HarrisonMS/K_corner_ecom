const db = require("../data/dbConfig");

module.exports = {
	getAll,
	getById,
};

function getAll() {
	return db("products");
}

function getById(id) {
	console.log(id);
	return db("products")
		.where({ id: Number(id) })
		.first();
}
