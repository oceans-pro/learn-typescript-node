const shell = require('shelljs')
shell.cp('-r', './public', './dist')
shell.cp('-r', './views', './dist')
