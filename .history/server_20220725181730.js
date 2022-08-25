const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.listen();
