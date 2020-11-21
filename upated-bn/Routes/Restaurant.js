const express = require('express');

var cityController = require('../Controllers/city');
var mealTypeController = require('../Controllers/Mealtype');
var restaurantController = require('../Controllers/Restaurant');
var userController = require('../Controllers/User');

const router =express.Router();

router.get('/location',cityController.getLocation);
router.get('/mealtype',mealTypeController.getMealType);
router.post('/restaurantfilter',restaurantController.filterSearch);
router.get('/getRestaurantbycity/:cityName',restaurantController.getRestaurantbycity);
router.get('/getResbyId/:restID',restaurantController.getRestaurantbyID);
router.post('/signup', userController.signup);
router.post('/login', userController.login);
module.exports = router;