require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL; // 🔹 Pobieramy zmienną

if (!MONGO_URL) {
  console.error('❌ Brak zmiennej MONGO_URL!');
  process.exit(1); // Zatrzymujemy backend, jeśli brakuje konfiguracji
}

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Routing
app.use('/api/reservations', require('./routes/reservations'));

app.listen(PORT, () => {
  console.log(`✅ Serwer działa na porcie ${PORT}`);
});
