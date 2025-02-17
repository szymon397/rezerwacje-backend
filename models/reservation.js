const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    sessionType: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    status: { type: String, enum: ['oczekująca', 'potwierdzona', 'anulowana'], default: 'oczekująca' },
});

module.exports = mongoose.model('Reservation', reservationSchema);

