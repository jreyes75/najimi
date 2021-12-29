//const express = require('express')
import express from 'express';
const router = express.Router();
//const Place = require('../models/places')
import Place from '../models/places.js';



//getting all places in najStores DB/collection
router.get('/', async (req, res) => {
    try {
        const places = await Place.find()
        res.json(places)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})
//getting a place in najStores collections based on ID
router.get('/:id', async (req, res) => {
    try{
        const places = await Place.findById(req.params.id)
        res.json(places)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})
//creating a place in najStores collections
router.post('/', async (req, res) => {
    const place = new Place ({
        id: {},
        img: req.body.img,
        name: req.body.name,
        category: req.body.category,
        address: req.body.address,
        description: req.body.description
    })
    try{
        const newPlace = await place.save()
        res.status(201).json(newPlace)
    }
    catch (err){
        res.status(400).json({
            message: err.message
        })
    }
})
//updating a place in najStores collections
router.patch('/', (req, res) => {
    
})
//deleting a place from najStores collections
router.delete('/:id', async (req, res) => {
    try{
        const places = await Place.findById(req.params.id).remove()
        res.status(200).json({
            message: 'Place successfully deleted!'
        })
    }
    catch (err){
        res.status(500).json({
            message: err.message
        })
    }
})


//Middleware Code
async function getPlace(req, res, next) {
    let place
    try{
        Place = await Place.findById(req.params.id)

        if (Place == null) {
            return res.status(404).json({
                message: 'Cannot find place'
            })
        }
    }

    catch (err){
        return res.status(500).json({
            message: err.message
        })
    }

    res.place = place;
    next()
}

//module.exports = router;

export default router;