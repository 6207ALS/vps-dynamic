const express = require("express")
const app = express()
const PORT = 3001;


require('dotenv').config()
const service = require(__dirname + "/service.js")

app.use(express.static("public"));
app.use(express.json());

app.get("/api/monkes", async (req, res) => {
	res.json(await service.getAll())
});

app.post("/api/monkes", async (req, res) => {
	let monkeData = req.body;

	savedMonke = await service.createMonke(monkeData);

	res.json(201).json(savedMonke);
});

app.put("/api/monkes/:id", async (req, res) => {
	let monkeData = req.body;
	let monkeId = req.params.id;

	await service.updateMonke(monkeId, monkeData);

	res.json(201)
});

app.delete("/api/monkes/:id", async (req, res) => {
	let monkeId = req.params.id;

	updatedMonke = await service.deleteMonke(monkeId);

	res.json(201)
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
})