const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('SELECT * from HOTELES');
}

const create = ({ nombre, direccion, ciudad, numero_de_estrellas, descripcion, tarifa }) => {
  return executeQuery('INSERT into HOTELES (nombre, direccion, ciudad, numero_de_estrellas, descripcion, tarifa) values(?, ?, ?, ?, ?, ?)', [nombre, direccion, ciudad, numero_de_estrellas, descripcion, tarifa]);
}


