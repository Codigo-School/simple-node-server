const express = require('express');
const { listCustomers } = require('./controller');

const router = express.Router();

router.get('/', listCustomers);

module.exports = router;
