const db = require("../../database/config/dbConfig");

module.exports = {
  create,
  deleting,
  findAll,
  findById
};

async function create(user) {
  const [id] = await db("users").insert(user, "id");

  return db("users")
    .where({ id })
    .first();
}

function deleting(id) {
  return db("users")
    .where("id", id)
    .del();
}

function findAll() {
  return db("users");
}

function findById(id) {
  return db("users")
    .select("id", "name", "job")
    .where({ id })
    .first();
}
