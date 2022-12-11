const express = require('express');
const app = express();
const beerRoute = express.Router();
// beer model
let beer = require('../models/beer');
// Add beer
beerRoute.route('/create').post((req, res, next) => {
  beer.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All beers
beerRoute.route('/').get((req, res) => {
  beer.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = beerRoute;