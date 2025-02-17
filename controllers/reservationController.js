const Reservation = require('../models/reservation');

// Pobierz wszystkie rezerwacje
const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera' });
    }
};

// Dodaj nową rezerwację
const createReservation = async (req, res) => {
    try {
        const { email, phone, startDate, endDate, sessionType, description, location } = req.body;
        const newReservation = new Reservation({ email, phone, startDate, endDate, sessionType, description, location });
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).json({ message: 'Błąd tworzenia rezerwacji' });
    }
};

// Aktualizacja statusu rezerwacji (tylko dla administratora)
const updateReservation = async (req, res) => {
    try {
        const { status } = req.body;
        const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedReservation);
    } catch (error) {
        res.status(400).json({ message: 'Nie można zaktualizować rezerwacji' });
    }
};

// Usunięcie rezerwacji (tylko dla administratora)
const deleteReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: 'Rezerwacja usunięta' });
    } catch (error) {
        res.status(400).json({ message: 'Nie można usunąć rezerwacji' });
    }
};

module.exports = { getReservations, createReservation, updateReservation, deleteReservation };
