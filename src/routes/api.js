const express = require('express');
const DataController = require('../controllers/dataController');
const dataService = require('../services/dataService');
const Professional = require('../../models/Professional');

const router = express.Router();
const dataController = new DataController(dataService);

// GET: All professionals
router.get('/professional', (req, res) => {
    dataController.getAllData(req, res);
});

// GET: Single professional by ID
router.get('/professional/:id', (req, res) => {
    dataController.getSingleData(req, res);
});

// POST: Create new professional
router.post('/professional', async (req, res) => {
  try {
    const professional = new Professional(req.body);
    const savedProfessional = await professional.save();
    res.status(201).json({ id: savedProfessional._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update professional by ID
router.put('/professional/:id', async (req, res) => {
  try {
    await Professional.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Delete professional by ID
router.delete('/professional/:id', async (req, res) => {
  try {
    await Professional.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;