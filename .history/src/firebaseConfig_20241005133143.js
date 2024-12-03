import { initializeApp } from 'firebase/app';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "arch-studio-multi-page-api.firebaseapp.com",
  databaseURL: "https://arch-studio-multi-page-api-default-rtdb.firebaseio.com",
  projectId: "arch-studio-multi-page-api",
  // ... other config properties
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

if (process.env.NODE_ENV === 'development') {
  connectDatabaseEmulator(db, 'localhost', 9000);
}

export { db };