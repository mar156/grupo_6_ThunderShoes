const path = require ('path')

const controller = {
login: (req, res)=>{
    res.sendFile(path.join(__dirname, '/../views/login.html'));
},
register: (req, res)=>{
    res.sendFile(path.join(__dirname, '/../views/register.html'));
}

}

module.exports= controller;