const { Client } = require('pg');

async function query(statement, values) {
	const client = new Client({
		user: '6207als',
  	host: '/var/run/postgresql',
  	database: 'cats',
  	password: process.env.POSTGRES_PASSWORD,
  	port: 5432,
	});
	await client.connect()
	let res = await client.query(statement, values || [])
	await client.end()

	return res;
}

async function getAll() {
	let res = await query("SELECT * FROM cat;")
	return res.rows
}

async function createCat(age) {
	let res = await query(`INSERT INTO cat (age) VALUES ($1)`, [age])
	return age;
}

async function updateCat(catId, catAge) {
	await query(`
	UPDATE cat 
	SET age = $1
	WHERE id = $2;
	`, [catAge, catId])
}

async function deleteCat(catId) {
	await query(`DELETE FROM cat WHERE id = $1;`, [catId])
}

module.exports = {
	getAll,
	createCat,
	deleteCat,
	updateCat,
}