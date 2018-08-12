'use strict';

module.exports = (routes, logger, category) => {
  routes.get('/', (req, res)=>{
    res.json(category.all());
  });

  return routes;
};
