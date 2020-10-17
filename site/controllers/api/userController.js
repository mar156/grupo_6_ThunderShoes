const list = require('./userController/list');
const latest = require('./userController/latest');
const detail = require('./userController/detail');
const isEmailAvailable = require('./userController/isEmailValid');

const controller = {
    list,
    latest,
    detail,
    isEmailAvailable,
}

module.exports = controller;