const path = require ('path')

const controller = {
index: (req, res)=>{
    res.render('index');
}
}

module.exports= controller;

//index: (req, res)=>{
//    res.sendFile(path.join(__dirname, '/../views/index.html'));
//}