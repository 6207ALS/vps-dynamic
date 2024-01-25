const Monke = require(__dirname + "/../models/monke.js")

async function getAll() {
	return await Monke.find({});
}

async function createMonke(monke) {
	const newMonke = new Monke({
		bananas: monke.bananas
	});

	return await newMonke.save();
}

async function deleteMonke(monkeId) {
	await Monke.findByIdAndDelete(monkeId);
}

async function updateMonke(monkeId, monkeData) {
	await Monke.findByIdAndUpdate(monkeId, monkeData);
}

module.exports = {
	getAll,
	createMonke,
	deleteMonke,
	updateMonke,
}