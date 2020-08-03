const express = require('express');
const app = express();
const productRoutes = require('./routes/product/product')

app.use(express.static('public'));

app.use('/product', productRoutes);

/* Aquí luego algunos serán por POST */
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/register', (req, res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})
