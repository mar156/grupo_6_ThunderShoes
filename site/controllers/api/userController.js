const completeList = require('./userController/list');
const latest = require('./userController/latest');
const detail = require('./userController/detail');
const isEmailAvailable = require('./userController/isEmailValid');
const pagination = require('./userController/pagination');

const list = (req, res) => {
    if ( !req.query.query ) {
        completeList(req, res);
    } else {
        pagination(req, res);
    }
};

const controller = {
    list,
    latest,
    detail,
    isEmailAvailable,
    // pagination,
}

module.exports = controller;