const dbTables = require("../configs/db.tables");
const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define(dbTables.tables.orders, {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
            primaryKey: true
        },
        order_date: {
            type: Sequelize.DATE
        },
        delivery_date: {
            type: Sequelize.DATE
        },
        customer_FK: {
            type: Sequelize.STRING
        },
        Product_FK: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        },
        instructions: {
            type: Sequelize.STRING
        }
    });

    return order;
};