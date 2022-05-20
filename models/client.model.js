const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('SELECT * from CLIENTES');
}

const create = ({ nombre, apellidos, direccion, telefono, email, fecha_nacimiento, dni }) => {
  return executeQuery('INSERT into CLIENTES (nombre, apellidos, telefono, direccion, fecha_nacimiento, dni) values(?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni]);
}

const getById = (pClientId) => {
  return executeQueryOne('SELECT * from CLIENTES where id = ?', [pClientId]);
}

const update = (pClientId, { nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni }) => {
  return executeQuery('update clientes set nombre = ?, apellidos = ?, telefono = ?, direccion = ?, email = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni, pClientId])
}

const deleteById = (pClientId) => {
  return executeQuery('delete from CLIENTES where id = ?', [pClientId]);
}

module.exports = {
  getAll, create, getById, update, deleteById
}