//const mongoose = require('mongoose');
import mongoose from 'mongoose';

//creates MongoDB Collection 'najStores'
const najStores = new mongoose.Schema({
    key:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});
//module.exports = places = mongoose.model('najStores', najStores);

export default mongoose.model('najStores', najStores);