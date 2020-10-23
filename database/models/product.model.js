const dbTables = require("../configs/db.tables");
const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define(dbTables.tables.products, {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
            primaryKey: true
        },
        urdu_name: {
            type: Sequelize.STRING
        },
        urdu_name: {
            type: Sequelize.STRING
        },
        cut: {
            type: Sequelize.STRING
        },
        avg_meat_percentage: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return product;
};