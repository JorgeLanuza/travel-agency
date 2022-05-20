const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery(
    'SELECT * from CLIENTES');
}

const create = ({ nombre, apellidos, direccion, telefono, email, fecha_nacimiento, dni }) => {
  return executeQuery(
    'INSERT into CLIENTES (nombre, apellidos, telefono, direccion, fecha_nacimiento, dni) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni]);
}

const getById = (pClientId) => {
  return executeQueryOne(
    'SELECT * from CLIENTES where id = ?',
    [pClientId]);
}

const update = (pClientId, { nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni }) => {
  return executeQuery(
    'UPDATE CLIENTES set nombre = ?, apellidos = ?, telefono = ?, direccion = ?, email = ?, fecha_nacimiento = ?, dni = ? where id = ?', [nombre, apellidos, telefono, direccion, email, fecha_nacimiento, dni, pClientId])
}

const deleteById = (pClientId) => {
  return executeQuery(
    'DELETE from CLIENTES where id = ?',
    [pClientId]);
}

module.exports = {
  getAll, create, getById, update, deleteById
}