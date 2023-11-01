CREATE DATABASE LasAcaciasDB

CREATE TABLE cabañas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    capacidad INT
);

CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    cabaña_id INT REFERENCES cabañas(id),
    fecha_inicio DATE,
    fecha_fin DATE,
    cliente_nombre VARCHAR(100),
    cliente_telefono VARCHAR(20),
    cliente_dni VARCHAR(20)
);

