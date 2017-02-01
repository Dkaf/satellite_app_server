const express = require('express');
const unirest = require('unirest');
const app = express();

app.get('/assets/:lat/:lon', (req, res) => {
	let lat = req.params.lat
	let lon = req.params.lon
	let key = process.env.NASA_KEY
	unirest.get('https://api.nasa.gov/planetary/earth/assets' + lat + lon + key)
	.end( (results) => {
		return results
	})
})

app.get('/images/:lat/:lon/:date', (req, res) => {
	let lat = req.params.lat;
	let lon = req.params.lon;
	let date = req.params.date;
	let key = process.env.NASA_KEY
	unirest.get('https://api.nasa.gov/planetary/earth/imagery' + lat + lon + date + key)
	.end( (results) => {
		return results
	})
})
