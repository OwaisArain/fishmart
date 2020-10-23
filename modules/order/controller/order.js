const order = require('../../../database/models').order;
async function getOrders(req, res) {
    try {
        var query = req.query;
        var Orders;
        if (query.id) {
            Orders = await order.findOne({ where: { id: query.id } });
            res.send(Orders);
        } else {
            Orders = await order.findAll({ order: [['updatedAt', 'DESC']] });
            res.send({ data: Orders });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function addOrder(req, res) {
    try {
        var reqBody = req.body;
        console.log('reqBody', reqBody);
        var created = await order.create(reqBody);
        if (created) {
            res.send({ message: 'Order added successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function editOrder(req, res) {
    try {
        var reqBody = req.body;
        if (!reqBody.id) {
            res.status(400).json({ message: 'Bad request' });
        }
        var updated = await order.update(reqBody, { where: { id: reqBody.id } });
        if (updated) {
            res.send({ message: 'Order updated successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
module.exports = { getOrders, addOrder, editOrder };