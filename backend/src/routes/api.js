const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/details', dataController.getEducationData);

module.exports = router;
