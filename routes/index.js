const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Demo App', welcome: 'Harbor' });
});

router.get('/:name', (req, res, next) => {
  res.render('hello', { title: 'Demo App', name: req.params.name || 'World' })
});

module.exports = router;
