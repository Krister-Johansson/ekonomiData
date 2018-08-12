'use strict';

module.exports = (routes, logger, controller) => {
  const category = require('./category')(routes, logger, controller.category);

  routes.use('/category', category);

  routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });

  return routes;
};
