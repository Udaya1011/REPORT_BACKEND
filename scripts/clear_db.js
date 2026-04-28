import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Point to the .env in the parent folder
dotenv.config({ path: path.join(__dirname, '../.env') });

async function clearData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
      if (collection.collectionName === 'reports') {
        await collection.deleteMany({});
        console.log('Cleared "reports" collection');
      }
    }
    
    console.log('Done');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

clearData();
