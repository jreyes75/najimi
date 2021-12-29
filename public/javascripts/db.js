//const mongoose = require('mongoose');

import mongoose from 'mongoose';
const URI = 'mongodb+srv://root:alpine@cluster0.gzfqi.mongodb.net/najimi?retryWrites=true&w=majority';

const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('Database is connected and live!');
}

export default connectDB;