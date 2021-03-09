exports.seed = function (knex) {
	// Deletes ALL existing entries
	const products = [
		{
			name: "Jar",
			category: "Cooking?",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 60,
			brand: "glass",
			rating: 4.5,
			numReviews: 10,
		},
		{
			name: "Vase",
			category: "Decor",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d2.jpg",
			price: 50,
			brand: "old as shit",
			rating: 4.2,
			numReviews: 5,
		},
		{
			name: "Oil Can",
			category: "Tools",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d3.webp",
			price: 70,
			brand: "Idk the metal kind",
			rating: 4.5,
			numReviews: 8,
		},
		{
			name: "metal things",
			category: "Tools",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d4.webp",
			price: 70,
			brand: "Chonky",
			rating: 4.5,
			numReviews: 8,
		},
		{
			name: "Type Writer",
			category: "Shirts",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d5.jpg",
			price: 60,
			brand: "Apple",
			rating: 4.5,
			numReviews: 10,
		},
		{
			name: "Fit Shirt",
			category: "Shirts",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d6.jpg",
			price: 50,
			brand: " Nike",
			rating: 4.2,
			numReviews: 5,
		},
		{
			name: "Best Pants",
			category: "Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			brand: " Nike",
			rating: 4.5,
			numReviews: 8,
		},
		{
			name: "Best Pants",
			category: "Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			brand: " Nike",
			rating: 4.5,
			numReviews: 8,
		},
		{
			name: "Best Pants",
			category: "Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			brand: " Nike",
			rating: 4.5,
			numReviews: 8,
		},
		{
			name: "Best Pants",
			category: "Pants",
			description:
				"The best product in the West made of the stuff youd think it was made of but just a little better",
			image: "/images/d1.jpg",
			price: 70,
			brand: " Nike",
			rating: 4.5,
			numReviews: 8,
		},
	];
	// Inserts seed entries
	return knex("products")
		.insert(products)
		.then(() => console.log("\n== Seed data for products table added. ==\n"));
};
