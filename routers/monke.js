const monkeRouter = require("express").Router();
const service = require(__dirname + "/../services/monkeService.js")

monkeRouter.get("/", async (req, res) => {
	res.json(await service.getAll())
});

monkeRouter.post("/", async (req, res) => {
	let monkeData = req.body;

	savedMonke = await service.createMonke(monkeData);

	res.status(201).json(savedMonke);
});

monkeRouter.put("/:id", async (req, res) => {
	let monkeData = req.body;
	let monkeId = req.params.id;

	await service.updateMonke(monkeId, monkeData);

	res.status(201).send()
});

monkeRouter.delete("/:id", async (req, res) => {
	let monkeId = req.params.id;

	updatedMonke = await service.deleteMonke(monkeId);

	res.status(201).send()
});

module.exports = monkeRouter;