const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    category: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return new Date();
        }

    },

    updatedAt: {
        type: Date,
        default: () => {
            return new Date();
        }
    },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
