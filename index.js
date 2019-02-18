var chokidar = require('chokidar');

var watcher = chokidar.watch('../sample', { persistent: true});

var log = console.log.bind(console);

watcher
  .on('add', (path) => { log('File', path, 'has been added'); })
  .on('addDir', (path) => { log('Directory', path, 'has been added'); })
  .on('change', (path) => { log('File', path, 'has been changed'); })
  .on('unlink', (path) => { log('File', path, 'has been removed'); })
  .on('unlinkDir', (path) => { log('Directory', path, 'has been removed'); })
  .on('error', (error) => { log('Error happened', error); })
  .on('ready', () => { log('Initial scan complete. Ready for changes.'); })
//   .on('raw', (event, path, details) => { log('Raw event info:', event, path, details); })

  