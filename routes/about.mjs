import express from 'express';
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Najimi | About Us' });
});

export default router;
