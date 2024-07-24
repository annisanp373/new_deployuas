const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = require('./routes/index'); // Import routes dari folder routes
const { sequelize } = require('./models/index'); // Import Sequelize instance dari folder models

app.use(express.json()); // Middleware untuk JSON
app.use('/', router); // Gunakan router untuk menangani rute

// Sinkronkan database ketika aplikasi dimulai
sequelize.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));

// Export handler untuk serverless function
module.exports.handler = serverless(app);
