const express = require('express');
const router = express.Router();
const dataController = require('./api/controllers/dataController');

router.get('/details', dataController.getEducationData);

module.exports = router;
