exports.seed = function (knex) {
	// Deletes ALL existing entries
	const users = [
		{
			username: "admin",
			password: "password",
			role: 1,
		},
		{
			username: "user",
			password: "password",
			role: 2,
		},
	];

	return knex("users")
		.insert(users)
		.then(() => console.log("\n== Seed data for users table added. ==\n"));
};
