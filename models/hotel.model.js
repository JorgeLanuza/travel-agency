const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery(
    'SELECT * from HOTELES');
}

const create = ({ nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery(
    'INSERT into HOTELES (nombre, direccion, ciudad, num_estrellas, descripcion, tarifa) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa]);
}

const getById = (pHotelId) => {
  return executeQueryOne(
    'SELECT * from HOTELES where id = ?',
    [pHotelId]);
}

const update = (pHotelId, { nombre, direccion, ciudad, num_estrellas, descripcion, tarifa }) => {
  return executeQuery(
    "UPDATE HOTELES set  nombre = ?, direccion = ?, ciudad = ?, num_estrellas = ?, descripcion = ?, tarifa = ?  where id = ?",
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa, pHotelId]);
};

const deleteById = (pHotelId) => {
  return executeQuery(
    'DELETE from HOTELES where id = ?',
    [pHotelId]);
}


module.exports = {
  getAll, create, getById, update, deleteById
}


