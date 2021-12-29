import express from 'express';
//var express = require('express');
// import {InMemoryNotesStore} from '../models/notes-memory.mjs';
// import {SQLiteNotesStore} from '../models/notes-sqlite.mjs';
import {MongoDBPlacesStore} from '../models/places-mongodb.mjs';

const router = express.Router();
let places = new MongoDBPlacesStore();

/* GET home page. */
router.get('/', async (req, resp, next) => {
    try {
        let keys = await places.keyList();

        resp.render('places', {
        title: 'Najimi | Businesses/Places',
        places: await Promise.all(keys.map(key => places.read(key)))
        });
    } catch (e) {
        next(e);
    }
});

router.get('/add', async (req, resp, next) => {
    try {
        if (req.query.key && req.query.img && req.query.name && req.query.category && req.query.address && req.query.description) {
            await places.create(req.query.key, req.query.img, req.query.name, req.query.category, req.query.address, req.query.description);
            resp.redirect('/places');
    } else {
        resp.render('edit-place', {
        title: 'Create Place'
        });
    }
    } catch (e) {
        next(e);
    }
});

router.get('/edit/:key', async (req, resp, next) => {
    try {
        let place = await places.read(req.params.key);

    if (!place) {
        next(new Error(`No such key ${req.params.key}`));
        return;
    }

    if (req.query.img && req.query.name && req.query.category && req.query.address && req.query.description) {
        await places.update(place.key, req.query.img, req.query.name, req.query.category, req.query.address, req.query.description);
        resp.redirect('/places');
    } else {
        resp.render('edit-place', {
            title: 'Edit Place',
            place: place,
            edit: true
        });
    }
    } catch (e) {
        next(e);
    }
});

router.get('/delete/:key', async (req, resp, next) => {
    try {
        let place = await places.read(req.params.key);

        if (!place) {
            next(new Error(`No such key ${req.params.key}`));
        return;
        }

        await places.destroy(place.key);
        resp.redirect('/places');
    } catch (e) {
        next(e);
    }
});

export default router;