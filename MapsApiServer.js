require('dotenv').config();
// const searchRegion = require("@googlemaps/region-lookup");
// const RegionSearchValue = require("@googlemaps/region-lookup");
// const SearchRegionRequestData = require("@googlemaps/region-lookup");
// const SearchRegionResponse = require("@googlemaps/region-lookup");
const express = require('express');

const app = express();
const port = 80;

app.get('/maps-api/autocomplete/:input', async function(req, res) {
  console.log("AUTOCOMPLETE REQUEST:", req.params.input);
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&region=us&key=${process.env.MAPS_API_KEY}`);
  const predictions = await response.json();
  console.log("AUTOCOMPLETE RESPONSE:", predictions);
  res.set("Access-Control-Allow-Origin", "*");
  res.json(predictions);
})

app.get('/maps-api/lookup/:place_id', async function(req, res) {
  console.log("LOOKUP REQUEST:", req.params.place_id)
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${req.params.place_id}&key=${process.env.MAPS_API_KEY}`);
  const address = await response.json();
  console.log("LOOKUP RESPONSE:", address);
  res.set("Access-Control-Allow-Origin", "*");
  res.json(address);
})

app.listen(port, () => {
  console.log(`Maps API helper listening on port ${port}`);
})