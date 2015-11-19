var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
requireDir('./gulp/app', { recurse: true });
requireDir('./gulp/test', { recurse: true });
