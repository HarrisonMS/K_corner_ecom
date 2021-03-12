exports.seed = function (knex) {
	// Deletes ALL existing entries
	const carts = [
		{
			user_id: 2,
			product_id: 3,
		},
		{
			user_id: 2,
			product_id: 4,
		},
	];

	return knex("carts")
		.insert(carts)
		.then(() => console.log("\n== Seed data for carts table added. ==\n"));
};
