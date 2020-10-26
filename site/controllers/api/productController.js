const completeList = require('./productController/list');
const latest = require('./productController/latest');
const detail = require('./productController/detail');
const pagination = require('./productController/pagination');

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
}

module.exports = controller;