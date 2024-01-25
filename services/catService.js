const { Client } = require('pg');

async function query(statement, values) {
	const client = new Client({
		database: 'cats'
	});
	await client.connect()
	let res = await client.query(statement, values || [])
	await client.end()

	return res;
}

async function getAll() {
	let res = await query("SELECT * FROM cats;")
	return res.rows
}

async function createCat(age) {
	let res = await query(`INSERT INTO cats (age) VALUES ($1)`, [age])
	return res.rows
}

async function updateCat(catId, catAge) {
	await query(`
	UPDATE cats 
	SET age = $1
	WHERE id = $2;
	`, [catAge, catId])
}

async function deleteCat(catId) {
	await query(`DELETE FROM cats WHERE id = $1;`, [catId])
}

module.exports = {
	getAll,
	createCat,
	deleteCat,
	updateCat,
}