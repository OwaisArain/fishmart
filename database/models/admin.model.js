const dbTables = require("../configs/db.tables");
const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };
    const admin_users = sequelize.define(dbTables.tables.admin_users, {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        full_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        secret: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return admin_users;
};