'use strict';

const csv = require('neat-csv');
const Joi = require('joi');
const moment = require('moment');

const inputDataValidation = Joi.object().keys({
  Datum: Joi.string().required(),
  Transaktion: Joi.string().required(),
  Kategori: Joi.string().empty(''),
  Belopp: Joi.string().required()
}).required();

module.exports = {
  upload: data => {
    return new Promise((resolv, reject) => {
      csv(data.buffer)
        .then(x => x.reduce((save, obj) => {
          if (Joi.validate(obj, inputDataValidation).error === null) {
            obj.deposit = false;
            obj.Datum = moment(obj.Datum).format();
            obj.Belopp = obj.Belopp.replace('.', '');
            obj.Belopp = obj.Belopp.replace(',', '.');

            obj.Belopp = parseFloat(obj.Belopp, 10);

            if (obj.Belopp > 0) {
              obj.deposit = true;
            }

            obj.Belopp = Math.abs(obj.Belopp) * 100;

            save.push({
              date: obj.Datum,
              transaction: obj.Transaktion,
              amount: obj.Belopp,
              deposit: obj.deposit,
              isCompany: null
            });
          }
          return save;

        }, []))
        .then(resolv)
        .catch(reject);
    });
  }
};
