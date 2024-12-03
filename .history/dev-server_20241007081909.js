const { exec, spawn } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');

let buildInProgress = false;

function runBuild() {
  if (buildInProgress) {
    console.log('Build already in progress, skipping...');
    return;
  }

  buildInProgress = true;
  console.log('Building...');

  const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });

  build.on('close', (code) => {
    buildInProgress = false;
    if (code !== 0) {
      console.error(`Build process exited with code ${code}`);
    } else {
      console.log('Build completed successfully');
    }
  });
}

// Run initial build
runBuild();

// Start Firebase Emulator
const emulator = spawn('firebase', ['emulators:start'], { stdio: 'inherit' });

emulator.on('error', (error) => {
  console.error(`Error starting Firebase Emulator: ${error}`);
});

// Watch for changes
const watcher = chokidar.watch(['src/**/*'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('ready', () => {
  console.log('Initial scan complete. Ready for changes');
});

watcher.on('change', (filePath) => {
  console.log(`File ${filePath} has been changed`);
  runBuild();
});

watcher.on('error', (error) => {
  console.error(`Watcher error: ${error}`);
});

process.on('SIGINT', () => {
  console.log('Stopping development server...');
  watcher.close();
  emulator.kill();
  process.exit();
});