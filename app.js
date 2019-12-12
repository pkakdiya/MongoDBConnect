const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const dev_URL = 'mongodb://localhost:27017/shopping' 

const app = express();
mongoose.connect(dev_URL);
mongoose.Promise = global.Promise;
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'MongoDB Connection Error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', productRoute);

let port = 1234;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});