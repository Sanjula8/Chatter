const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// All Routes Here

app.use(function (req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});
//Takes any incoming middleware with an error and print out a nicer display using JSON.
app.use(errorHandler);

app.listen(PORT, function () {
	console.log(`Server is starting on Port ${PORT}`);
});
