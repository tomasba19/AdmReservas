const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//crear reserva / caba;a
app.post("/cabanas", async (req, res) => {
  try {
    const { nombre, capacidad } = req.body;
    const newCabana = await pool.query(
      "INSERT INTO cabanas (nombre, capacidad) VALUES($1, $2) RETURNING *",
      [nombre, capacidad]
    );
    res.json(newCabana.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/reservas", async (req, res) => {
  try {
    const {
      cabana_id,
      fecha_inicio,
      fecha_fin,
      cliente_nombre,
      cliente_telefono,
      cliente_dni,
    } = req.body;
    const newReserva = await pool.query(
      "INSERT INTO reservas (cabana_id, fecha_inicio, fecha_fin, cliente_nombre, cliente_telefono, cliente_dni) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        cabana_id,
        fecha_inicio,
        fecha_fin,
        cliente_nombre,
        cliente_telefono,
        cliente_dni,
      ]
    );
    res.json(newReserva.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get todas las reservas / cabanias
app.get("/cabanas", async (req, res) => {
  try {
    const allCabanas = await pool.query("SELECT * FROM cabanas");
    res.json(allCabanas.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/reservas", async (req, res) => {
  try {
    const allReservas = await pool.query("SELECT * FROM reservas");
    res.json(allReservas.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get una reserva

//update reserva

//borrar reserva

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
