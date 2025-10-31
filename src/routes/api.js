const express = require('express');
const DataController = require('../controllers/dataController');
const dataService = require('../services/dataService');

const router = express.Router();
const dataController = new DataController(dataService);

// Expose route that the frontend expects
router.get('/professional', (req, res) => {
    dataController.getAllData(req, res);
});

module.exports = router;