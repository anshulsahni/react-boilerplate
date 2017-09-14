const log = require('logem');
const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

module.exports = (port, host = 'localhost') => {
  log.info(`Server started! ${chalk.green('✓')}`);
  log.info(`${chalk.bold('Access URLs:')}${divider}
    Localhost: ${chalk.magenta(`http://${host || 'localhost'}:${port}`)}
    LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
    ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
  `);
};
