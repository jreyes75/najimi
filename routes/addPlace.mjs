var express = require('express');
var router = express.Router();

/* GET addPlace page. */
router.get('/', function(req, res, next) {
    res.render('addPlace', { title: 'Najimi | Add Place' });
});

router.get('/create', async (req, resp, next) => {
    try {
        if (req.query._id && req.query.name && req.query.category && req.query.description) {
        await places.create(req.query._id, req.query.name, req.query.category, req.query.description);
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

module.exports = router;
