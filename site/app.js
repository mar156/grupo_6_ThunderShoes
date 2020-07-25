const express = require('express');
const app = express();

app.use(express.static('public'));

/* Aquí luego algunos serán por POST */
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productDetail', (req, res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req, res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/footer', (req, res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});

app.get('/shop', (req, res) => {
    res.sendFile(__dirname + '/views/shop.html');
});

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})
