const db = require('./dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(bullion) {
  return db('bullion').insert(bullion);
}

function update(id, changes) {
  return db('bullion').where({id}).update(changes);
}

function remove(id) {
    return db('bullion').where({id}).del();
}

function getAll() {
  return db('bullion');
}

function findById(id) {
    return db('bullion').where({id}).first();
}