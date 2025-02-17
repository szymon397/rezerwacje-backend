const express = require('express');
const router = express.Router();
const { getReservations, createReservation, updateReservation, deleteReservation } = require('../controllers/reservationController');

// Pobranie wszystkich rezerwacji
router.get('/', getReservations);

// Dodanie nowej rezerwacji
router.post('/', createReservation);

// Aktualizacja statusu rezerwacji (potwierdzenie/anulowanie)
router.put('/:id', updateReservation);

// Usunięcie rezerwacji
router.delete('/:id', deleteReservation);

module.exports = router;
