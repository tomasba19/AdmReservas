const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//crear reserva

//get todas las reservas

//get una reserva

//update reserva

//borrar reserva


app.listen(5000, () => {
    console.log('Server is running on port 5000')
});