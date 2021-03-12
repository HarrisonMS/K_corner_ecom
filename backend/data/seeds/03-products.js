exports.seed = function (knex) {
	// Deletes ALL existing entries
	const products = [
		{
			name: "Jar",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 60,
			countInStock: 1,
			brand: "glass",
		},
		{
			name: "Vase",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d2.jpg",
			price: 50,
			countInStock: 1,
			brand: "old as shit",
		},
		{
			name: "Oil Can",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d3.webp",
			price: 70,
			countInStock: 1,
			brand: "Idk the metal kind",
		},
		{
			name: "metal things",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d4.webp",
			price: 70,
			countInStock: 1,
			brand: "Chonky",
		},
		{
			name: "Type Writer",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d5.jpg",
			price: 60,
			countInStock: 1,
			brand: "Apple",
		},
		{
			name: "Fit Shirt",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d6.jpg",
			price: 50,
			countInStock: 1,
			brand: " Nike",
		},
		{
			name: "Best Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			countInStock: 1,
			brand: " Nike",
		},
		{
			name: "Best Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			countInStock: 1,
			brand: " Nike",
		},
		{
			name: "Best Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			countInStock: 1,
			brand: " Nike",
		},
		{
			name: "Best Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			countInStock: 1,
			brand: " Nike",
		},
	];
	// Inserts seed entries
	return knex("products")
		.insert(products)
		.then(() => console.log("\n== Seed data for products table added. ==\n"));
};
