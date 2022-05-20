const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('select * from viajes');
}

const create = ({ fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta }) => {
  return executeQuery('insert into viajes (fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta) values (?, ?, ?, ?)',
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta]);
}

const getById = (pTravelId) => {
  return executeQueryOne('select * from viajes where id = ?', [pTravelId]);
}


const update = (pTravelId, { fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta }) => {
  return executeQuery(
    "update clientes set  fecha_salida = ?, fecha_vuelta = ?, id_vuelo_ida = ?, id_vuelo_vuelta = ?  where id = ?",
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, pTravelId]);
};

const deleteById = (pTravelId) => {
  return executeQuery('delete from viajes where id = ?',
    [pTravelId]);
}


module.exports = {
  getAll, create, getById, update, deleteById
}