exports.up = function (knex) {
	return (
		knex.schema
			// roles
			.createTable("roles", (tbl) => {
				tbl.increments();

				tbl.string("name", 128).notNullable().unique();
			})

			// users
			.createTable("users", (tbl) => {
				tbl.increments();

				tbl.string("username", 128).notNullable().unique().index();
				tbl.string("password", 256).notNullable();

				tbl
					.integer("role")
					.unsigned()
					.references("roles.id")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");
			})

			.createTable("products", (tbl) => {
				tbl.increments();
				tbl.string("name", 128).notNullable().index();
				// tbl.string("category", 128);
				tbl.string("description", 256).notNullable();
				tbl.string("image", 255).notNullable();
				tbl.integer("price", 255).notNullable();
				tbl.integer("countInStock").notNullable();
				tbl.string("brand", 128);
				// tbl.float("rating");
				// tbl.integer("numReviews");
			})

			.createTable("carts", (tbl) => {
				tbl.increments();

				tbl
					.integer("user_id")
					.unsigned()
					.references("id")
					.inTable("users")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");

				tbl
					.integer("product_id")
					.unsigned()
					.references("id")
					.inTable("products")
					.onDelete("RESTRICT")
					.onUpdate("CASCADE");
			})
	);
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("roles")
		.dropTableIfExists("users")
		.dropTableIfExists("products");
};
