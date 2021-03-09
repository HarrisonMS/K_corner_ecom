const router = require("express").Router();
const Products = require("./model");

router.get("/", (req, res) => {
	Products.getAll()
		.then((products) => {
			res.status(200).json({ products: products });
		})
		.catch((err) => {
			res.status(400).json({ err: err.message });
		});
});

module.exports = router;
