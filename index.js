const express = require("express")
const app = express()
const PORT = 3001;

require('dotenv').config()
const monkeRouter = require(__dirname + "/routers/monke.js")
const catsRouter = require(__dirname + "/routers/cat.js")

app.use(express.static("public"));
app.use(express.json());

app.use("/api/monkes", monkeRouter)
app.use("/api/cats", catsRouter)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
})