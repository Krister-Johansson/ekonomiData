'use strict';

module.exports = logger => {
  return {
    category: require('./category')(logger)
  };
};
