const restaurantController = require('../controllers/restaurant.controller');

module.exports = function(app) {
    app.post('/api/restaurant/add', restaurantController.addRestaurant);
    app.get('/api/restaurant', restaurantController.getAllRestaurants);
    app.get('/api/restaurant/categories', restaurantController.getAllCategories);
    app.get('/api/restaurant/categories/:categoryName', restaurantController.getRestaurantsByCategory);
    app.get('/api/restaurant/:id', restaurantController.getRestaurantById);
    app.get('/api/restaurant/rating/:ratingValue', restaurantController.getRestaurantsByRating);
    app.put('/api/restaurant/:id', restaurantController.updateRestaurant);

}
