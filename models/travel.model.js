const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery(
    'SELECT * from VIAJES');
}

const create = ({ fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta }) => {
  return executeQuery(
    'INSERT into VIAJES (fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta) VALUES (?, ?, ?, ?)',
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta]);
}

const getById = (pTravelId) => {
  return executeQueryOne(
    'SELECT * from VIAJES where id = ?',
    [pTravelId]);
}

const update = (pTravelId, { fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta }) => {
  return executeQuery(
    "UPDATE VIAJES set  fecha_salida = ?, fecha_vuelta = ?, id_vuelo_ida = ?, id_vuelo_vuelta = ?  where id = ?",
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, pTravelId]);
};

const deleteById = (pTravelId) => {
  return executeQuery(
    'DELETE from VIAJES where id = ?',
    [pTravelId]);
}

module.exports = {
  getAll, create, getById, update, deleteById
}