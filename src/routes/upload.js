'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');

const Multer = multer({ storage: multer.memoryStorage() });
const models = require('../models');
const { upload } = require('../controller/upload');

/* POST Upload file. */
router.post('/', Multer.single('csvFile'), (req, res) => {
  upload(req.file).then(x => {
    console.log(x);
    models.Transaction.create(x[0]).then((x) => res.json(x)).catch((x) => res.json(x));
  });
});

module.exports = router;
