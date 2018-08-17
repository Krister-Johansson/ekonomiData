'use strict';

module.exports = (sequelize, DataTypes) => {
  let transaction = sequelize.define('Transaction', {
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      unique: 'unique_transaction'
    },
    transaction: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: 'unique_transaction'
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: 'unique_transaction'
    },
    deposit: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      unique: 'unique_transaction'
    },
    isCompany: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  return transaction;
};
