const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const conexion = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//codigo de la base de datos

async function startServer() {
    try {
        await conexion.authenticate();
        console.log('Conectado a la base de datos.');

        app.listen(PORT, () => {
            console.log("Servidor ejecutándose en http://localhost:${PORT}");
        });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}


startServer();