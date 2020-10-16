const list = require('./userController/list');
const latest = require('./userController/latest');
const detail = require('./userController/detail');

const controller = {
    list,
    latest,
    detail,
}

module.exports = controller;