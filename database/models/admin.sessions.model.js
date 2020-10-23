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
    const admin_sessions = sequelize.define(dbTables.tables.admin_sessions, {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        },
        expiresIn: {
            type: Sequelize.INTEGER
        }
    });

    return admin_sessions;
};