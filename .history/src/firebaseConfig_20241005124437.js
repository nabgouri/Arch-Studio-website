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

if (import.meta.env.DEV) {
  // Use the Vite dev server port here
  connectDatabaseEmulator(db, "localhost", 5173);
}

export { db };