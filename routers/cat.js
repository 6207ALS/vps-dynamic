const catRouter = require("express").Router();
const catService = require(__dirname + "/../services/catService.js");

catRouter.get("/", async (req, res) => {
	res.json(await catService.getAll());
});

catRouter.post("/", async (req, res) => {
	let catAge = req.body.age
	res.status(201).json(await catService.createCat(catAge));
});

catRouter.put("/:id", async (req, res) => {
	let catId = req.params.id;
	let catAge = req.body.age;
	await catService.updateCat(catId, catAge);

	res.status(201).send()
});

catRouter.delete("/:id", async (req, res) => {
	let catId = req.params.id;
	await catService.deleteCat(catId);
	res.status(201).send();
});

module.exports = catRouter;