const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(MONGO_URI);

const db = {};

const connectToMongo = async () => {
  await client.connect();
  console.log("DB connected!");

  const database = client.db(DB_NAME);
  db.users = database.collection("users");
};

module.exports = { connectToMongo, db };
