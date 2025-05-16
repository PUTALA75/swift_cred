import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
const dbName = 'backendAssignment';

export const connectDB = async () => {
  await client.connect();
  console.log('MongoDB Connected');
  return client.db(dbName);
};

export default client;
