import { exec } from 'child_process';
import chokidar from 'chokidar'

// Run initial build
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error}`);
    return;
  }
  console.log(`Build output: ${stdout}`);
  
  // Start Firebase Emulator
  const emulator = exec('firebase emulators:start');
  emulator.stdout.pipe(process.stdout);
  emulator.stderr.pipe(process.stderr);
  
  // Watch for changes
  const watcher = chokidar.watch(['src/**/*', 'dist/**/*'], { // Changed 'public' to 'dist'
    ignored: /^\./,
    persistent: true
  });
  
  watcher.on('change', (path) => {
    console.log(`File ${path} has been changed. Rebuilding...`);
    exec('npm run build', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during rebuild: ${error}`);
        return;
      }
      console.log(`Rebuild output: ${stdout}`);
    });
  });
});