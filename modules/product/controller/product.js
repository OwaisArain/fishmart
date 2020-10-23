const product = require('../../../database/models').product;
async function getProducts(req, res) {
    try {
        var query = req.query;
        var products;
        if (query.id) {
            products = await product.findOne({ where: { id: query.id } });
            res.send(products);
        } else {
            products = await product.findAll({ order: [['updatedAt', 'DESC']] });
            res.send({ data: products });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function addProduct(req, res) {
    try {
        var reqBody = req.body;
        console.log('reqBody', reqBody);
        var created = await product.create(reqBody);
        if (created) {
            res.send({ message: 'Product added successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function editProduct(req, res) {
    try {
        var reqBody = req.body;
        if (!reqBody.id) {
            res.status(400).json({ message: 'Bad request' });
        }
        var updated = await product.update(reqBody, { where: { id: reqBody.id } });
        if (updated) {
            res.send({ message: 'Product updated successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
module.exports = { getProducts, addProduct, editProduct };