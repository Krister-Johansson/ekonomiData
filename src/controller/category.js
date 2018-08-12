'use strict';

const data = [
  {
    id: 1,
    name: 'test'
  },
  {
    id: 2,
    name: 'test test'
  }
];

module.exports = logger => {
  return {
    all: () => {
      logger.debug(data);
      return data;
    }
  };
};
