const Product =  require('../models/product.model');

exports.test = (req, res) => {
    res.send('Greetings from Test Controller!')
};

exports.product_create = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save((error) => {
        if (error) {
            return next(error);
        }
        res.send('Product is created successfully!');
    });
};

exports.product_detail = (req, res) => {
    console.log(req.params.id);
    Product.findById(req.params.id, (error, product) => {
        if (error) {
            return next(error);
        }
        res.send(product);
    });
};

exports.product_update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, product) => {
        if (error) {
            next(error);
        }
        res.send('product updated!');
    });
};


exports.product_delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (error, product) => {
        if (error) {
            next(error);
        }
        res.send('product deleted!');
    });
};