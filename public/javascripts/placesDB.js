const mongoose = require('mongoose');

//creates MongoDB Collection 'najStores'
const najStores = new mongoose.Schema({
    img: {
        type: String
    },
    name: {
        type: String
    },
    category: {
        type: String
    },
    adddress: {
        type: String
    },
    description:{
        type: String
    }
});

module.exports = placesDB = mongoose.model('najStores', najStores);