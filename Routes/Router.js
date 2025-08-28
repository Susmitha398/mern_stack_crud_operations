// routes/router.js

const express = require('express');
const router = express.Router();

// Import controllers
const { getting, posting, putting, deleting } = require('../Controllers/Routing_controller');

// Route definitions
router.get('/movie', getting);
router.post('/movie', posting);
router.put('/movie/:id', putting);
router.delete('/movie/:id', deleting);

module.exports = router;
