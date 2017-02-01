const express = require('express');
const unirest = require('unirest');
const app = express();

app.use()

app.get('/images', (req, res) => {
	unirest.get('https://api.nasa.gov/planetary/earth/assets').end((results) => {
		return results
	})
})
