const { Sequelize } = require('sequelize');

const conexion = new Sequelize({

  username:'root',
  password:'123456',
    database: 'proyecto6to',
    host: 'localhost',
  dialect: 'mysql'
}); 

conexion.authenticate()
.then(() => console.log('conectado'))
.catch((error) => console.log(error))
module.exports= conexion;