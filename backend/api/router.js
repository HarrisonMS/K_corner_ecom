const router = require("express").Router();
const authRouter = require("../auth/router");
const productsRouter = require("../products/router");

router.use("/products", productsRouter);

router.get("/", (req, res) => {
	res.json({ api: "You figured it out!" });
});

module.exports = router;
