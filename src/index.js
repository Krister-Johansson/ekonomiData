'use strict';

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const log4js = require('log4js');
const chalk = require('chalk');

dotenv.config();

const logger = log4js.getLogger();
const PORT = process.env.PORT || 8000;
logger.level = process.env.DEBUG_LEVEL || 'debug';

const controller = require('./controller')(logger);
const routes = require('./routes')(express.Router(), logger, controller);

const app = express();
app.use(morgan('dev'));

app.use('/api/v1/', routes);

app.listen(process.env.PORT, () => {
  logger.debug(`Start server at ${chalk.green(PORT)}`);
});
