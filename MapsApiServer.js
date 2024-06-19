require('dotenv').config();
const express = require('express');
const app = express();
const port = 80;

function getRequestURL(input) {
  const reqParams = {
    input: input,
    region: 'us',
  };
  let url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
  for (let [param, val] of Object.entries(reqParams)) {
    url += (param + "=" + val + "&");
  }
  url += "key=" + process.env.MAPS_API_KEY;
  return url;
}

app.get('/maps-api/autocomplete/:input', async function(req, res) {
  console.log("REQUEST:", req.params.input);
  const url = await getRequestURL(req.params.input);
  const response = await fetch(url);
  const predictions = await response.json().catch((response) => {console.log("it no work", response);});
  console.log("RESPONSE:", predictions);
  res.set("Access-Control-Allow-Origin", "*");
  res.json(predictions);
})

app.listen(port, () => {
  console.log(`Maps API helper listening on port ${port}`);
})