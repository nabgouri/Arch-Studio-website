import { spawn } from 'child_process';

// Start Vite build in watch mode
const vite = spawn('npm', ['run', 'build', '--', '--watch'], { stdio: 'inherit', shell: true });

// Start Firebase Emulator
const emulator = spawn('firebase', ['emulators:start'], { stdio: 'inherit', shell: true });

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  vite.kill();
  emulator.kill();
  process.exit();
});