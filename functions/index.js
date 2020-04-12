const functions = require('firebase-functions');
const indexPage = require("./next/serverless/pages/index");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  indexPage.render(request, response);
});

exports.api = functions.https.onRequest(app);