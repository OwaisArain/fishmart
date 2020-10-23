const db = require('../../../database/models');
const customer = db.customers;
async function getCustomers(req, res) {
    try {
        var query = req.query;
        var user;
        if (query.id) {
            user = await customer.findOne({ where: { id: query.id } });
            res.send(user);
        } else {
            user = await customer.findAll({ order: [['updatedAt', 'DESC']] });
            res.send({ data: user });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function addCustomer(req, res) {
    try {
        var userInfo = req.body;
        var jane = await customer.create(userInfo);
        if (jane) {
            res.send({ message: 'Customer added successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
async function editCustomer(req, res) {
    try {
        var userInfo = req.body;
        if (!userInfo.id) {
            res.status(400).json({ message: 'Bad request' });
        }
        var jane = await customer.update(userInfo, { where: { id: userInfo.id } });
        if (jane) {
            res.send({ message: 'Customer updated successfully' });
        }
    } catch (error) {
        res.send({ message: error });
    }
}
module.exports = { getCustomers, addCustomer, editCustomer };