import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await new MongoClient(process.env.MONGODB_URL).connect();
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db(process.env.MONGODB_DB);
  const result = await db.collection(collection).insertOne(document);
  return result;
}
