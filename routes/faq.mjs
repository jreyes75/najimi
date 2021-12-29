import express from 'express';
var router = express.Router();

/* GET FAQ page. */
router.get('/', function(req, res, next) {
    res.render('faq', { title: 'Najimi | FAQ' });
});

export default router;
