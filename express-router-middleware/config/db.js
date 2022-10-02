const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(MONGO_URI);

const db = {};

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("DB Connected");

    const dbInstance = client.db(DB_NAME);

    db.users = dbInstance.collection("users");
    db.expense = dbInstance.collection("expense");
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  connectToDB,
  db,
};
