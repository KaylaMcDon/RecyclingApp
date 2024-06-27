require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ncrecyclingappfeedbackbot@gmail.com",
    pass: process.env.EMAIL_PASS
  }
});

const port = process.env.PORT || 80;

const express = require('express');
const app = express();

app.get('/maps-api/autocomplete/:input', async function(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.input}&components=country:us&key=${process.env.MAPS_API_KEY}`);
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

app.post('/feedback/:title/:body', function(req, res) {
  console.log("title: " + req.params.title);
  console.log("body: " + req.params.body);
  const mailOptions = {
    from: 'ncrecyclingappfeedbackbot@gmail.com',
    to: 'ncrecyclingappfeedbackbot@gmail.com',
    subject: req.params.title,
    text: req.params.body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("Mailing error:", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.listen(port, () => {
  console.log(`Maps API helper listening on port ${port}`);
})