const listingsController=require('../controllers/listingsController');
const express = require('express');
const listingsRouter = express.Router();

listingsRouter.route('/')
.get(listingsController.readListings)
.post(listingsController.createListings);

listingsRouter.route('/:id')
.patch(listingsController.updateListings)
.delete(listingsController.deleteListings);

module.exports= listingsRouter;