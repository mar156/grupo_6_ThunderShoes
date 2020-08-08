const express = require('express');
const app = express();
const productRoutes = require('./routes/product/product');
const mainRoutes = require('./routes/statics/main');
const usersRoutes = require('./routes/users/users');
const adminRoutes = require('./routes/admin/admin');

app.set( 'view engine', 'ejs');

app.use(express.static('public'));
app.use('/product', productRoutes);
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})
