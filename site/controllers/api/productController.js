const list = require('./productController/list');
const latest = require('./productController/latest');
const detail = require('./productController/detail');

const controller = {
    list,
    latest,
    detail,
}

module.exports = controller;