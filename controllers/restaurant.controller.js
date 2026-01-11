const Restaurant = require('../models/restaurantModel');

// exports.addRestaurant = async (req, res) => {
//     const restaurantObj = {
//         name: req.body.name,
//         description: req.body.description,
//         category: req.body.category,
//         imgUrl: req.body.imgUrl,
//         location: req.body.location,
//         phone: req.body.phone,
//         rating: req.body.rating,

//     }
//     try {
//         const restaurant = await Restaurant.create(restaurantObj);
//         res.status(200).send(restaurant);
//     } catch (error) {
//         console.log('Error while adding restaurant', error.message);
//         res.status(500).send('error occured while adding restaurant');
//     }
// };

exports.addRestaurant = async (req, res) => {
    console.log("REQ BODY 👉", req.body);

    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        console.error('Error while adding restaurant', error);
        res.status(400).json({
            message: error.message
        });
    }
};

//add restaurant ends here


//fetch restaurant data code starts here

exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurantsquery = {};
        const restaurants = await Restaurant.find(restaurantsquery);
        res.status(200).send({
            restaurants,
        message: 'Restaurants fetched successfully'
        });
    } catch (error) {
        console.log('Error while fetching restaurants', error.message);
        res.status(500).send('Error occured while fetching restaurants');
    }
};

//fetch restaurant data code ends here

//fetch restaurant all category code starts here

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Restaurant.distinct('category');
        res.status(200).send(categories);
    } catch (error) {
        console.log('Error while fetching categories', error.message);
        res.status(500).send('Error occured while fetching categories');
    }
};


//fetch restaurant all category code ends here


//fetch restaurant by category code starts here

exports.getRestaurantsByCategory = async (req, res) => {
    const { categoryName } = req.params;
    try {
        const restaurants = await Restaurant.find({ 
            category: categoryName
         });
        res.status(200).send(restaurants);
    } catch (error) {
        console.log('Error while fetching restaurants by category', error.message);
        res.status(500).send({
            message:'Error occured while fetching restaurants by category'
        })

    }
}

//fetch restaurant by category code ends here

//find restaurant by id code starts here

exports.getRestaurantById = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById({ _id: id });
        if (restaurant) {
            res.status(200).send(restaurant);
        } else {
            res.status(404).send({
                message: 'Restaurant not found'
            });
        }
    } catch (error) {
        console.log('Error while fetching restaurant by id', error.message);
        res.status(500).send({
            message: 'Error occured while fetching restaurant by id'
        })
    }  
};


//find restaurant by id code ends here

//find restaurant by rating code starts here

//find restaurant by rating code ends here

//update restaurant by id code starts here


exports.updateRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurantObj ={
           name: req.body.name,
           description: req.body.description,
           category: req.body.category,
           imgUrl: req.body.imgUrl,
           location: req.body.location,
           phone: req.body.phone,
           rating: req

        }
        const restaurant = await Restaurant.findByIdAndUpdate(
            id,
            restaurantObj,
            { new: true }
        );
        if (restaurant) {
            res.status(200).send({
                restaurant,
                message: 'Restaurant rating updated successfully'
            });
        } else {
            res.status(404).send({
                message: 'Restaurant not found'
            });
        }
    } catch (error) {
        console.log('Error while fetching restaurants by rating', error.message);
        res.status(500).send({
            message: 'Error occured while fetching restaurants by rating'
        })
    }
};


//update restaurant by id cod