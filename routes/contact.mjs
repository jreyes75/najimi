import express from 'express';
var router = express.Router();

/* GET FAQ page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Najimi | Contact' });
});

export default router;