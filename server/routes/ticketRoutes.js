const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const auth = require('../middleware/auth');

// CRUD routes
router.post('/', auth, ticketController.createTicket);
router.get('/', auth, ticketController.getAllTickets);
router.get('/:id', auth, ticketController.getTicketById);
router.put('/:id', auth, ticketController.updateTicket);
router.delete('/:id', auth, ticketController.deleteTicket);

module.exports = router;
