const fs = require('fs'); //logger dans le serveur nodejs

const logSync = (logPath, message) => {
  fs.appendFile(logPath, message + '\n');
};

const logsSync = () => {
  logSync('logs/app.log', 'Ligne 1');
  logSync('logs/app.log', 'Ligne 2');
  logSync('logs/app.log', 'Ligne 3');
  logSync('logs/app.log', 'Ligne 4');
  logSync('logs/app.log', 'Ligne 5');
};

console.time('logsSync()');
logsSync();
console.timeEnd('logsSync()');

const  logAsync = (logPath, msg, cb) => {
  fs.appendFile(logPath, msg + '\n', cb);
};

const logsAsync = () => {
  logAsync('logs/app.log', 'Ligne 1', () => {
    logAsync('logs/app.log', 'Ligne 2', () => {
      logAsync('logs/app.log', 'Ligne 3', () => {
        logAsync('logs/app.log', 'Ligne 4', () => {
          logAsync('logs/app.log', 'Ligne 5', () => {
          });
        });
      });
    });
  });
}

console.time('logsAsync()');
logsAsync();
console.timeEnd('logsAsync()');