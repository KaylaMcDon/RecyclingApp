require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/maps-api/autocomplete/:input', async function(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&region=us&key=${process.env.MAPS_API_KEY}`);
  const predictions = await response.json();
  res.set("Access-Control-Allow-Origin", "*");
  res.json(predictions);
})

app.get('/maps-api/geocode/:latlng', async function(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.params.latlng}&key=${process.env.MAPS_API_KEY}`);
  const address = await response.json();
  res.set("Access-Control-Allow-Origin", "*");
  res.json(address);
})

app.get('/maps-api/lookup/:place_id', async function(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${req.params.place_id}&key=${process.env.MAPS_API_KEY}`);
  const address = await response.json();
  res.set("Access-Control-Allow-Origin", "*");
  res.json(address);
})

app.listen(port, () => {
  console.log(`Maps API helper listening on port ${port}`);
})