/* --------- SHA284 ---------- */
var CryptoJS = require("crypto-js");
/* --------- TOTP ---------- */
var totp = require('totp-generator');
/* --------- CRYPTO ---------- */
const crypto = require('crypto');
/* --------- ENCRYPT KEY ---------- */
const ENCRYPTION_KEY = 'JchO8jiSJ5Zj4JzU';
/* --------- ENCRYPT KEY WALLETS ---------- */
const ENCRYPTION_KEY_WALLETS = 'J160qKRnEXDTE0mk'
const IV_LENGTH = 16;
/* --------- CORS ---------- */
var cors = require('cors');
/* --------- EXPRESS ---------- */
const express = require('express');
/* --------- CHARACTERS ---------- */
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%ˆ&*()_+{|:?><';

const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();

// Then use it before your routes are set up:
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/generatetotp', (req, res) => {
  var result = totp('AIT7AVCSL5DNUZES');
  res.send(result);
  // const name = req.query.name || 'World';
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/randompassowrd', (req, res) => {
  var length = 32;
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  res.send(result);
});

app.listen(80, () =>
  console.log('Express server is running on https://wirebit.com:443')
);
