const express = require('express');
const app = express();
const productRoutes = require('./routes/product/product')
const mainRoutes= require('./routes/statics/main')
const usersRoutes= require('./routes/users/users')

app.use(express.static('public'));
app.use('/product', productRoutes);
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
/* Aquí luego algunos serán por POST */

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})
