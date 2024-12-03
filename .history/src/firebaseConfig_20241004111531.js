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

// Check if we're running in development mode (Vite uses 'development' as default)
if (import.meta.env.DEV) {
  // Check if we're running on localhost
  if (window.location.hostname === "localhost") {
    // Connect to the emulator
    connectDatabaseEmulator(db, "localhost", 9010);
    console.log("Connected to Firebase emulator");
  } else {
    console.log("Running in development mode, but not on localhost");
  }
} else {
  console.log("Running in production mode");
}

export { db };