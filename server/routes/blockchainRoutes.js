const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');
const auth = require('../middleware/auth');

// Blockchain interaction routes
router.post('/log', auth, blockchainController.logAction);
router.get('/logs/:ticketId', auth, blockchainController.getLogByTicketId);

module.exports = router;
