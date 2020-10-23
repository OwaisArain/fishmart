const dbTables = require("../configs/db.tables");
const { DataTypes } = require('sequelize');
// const sequelize = new Sequelize();
// const User = sequelize.define(dbTables.tables.customers, {
//     // Model attributes are defined here
//     id: {
//         type: DataTypes.UUID,
//         defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
//     },
//     name: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     whatsapp_no: {
//         type: Sequelize.STRING
//     },
//     alt_delivery_contact: {
//         type: Sequelize.STRING
//     },
//     phone_1: {
//         type: Sequelize.STRING
//     },
//     phone_2: {
//         type: Sequelize.STRING
//     },
//     pin_location: {
//         type: Sequelize.TEXT
//     },
//     complete_address: {
//         type: Sequelize.TEXT
//     },
//     distance_from_shop: {
//         type: Sequelize.TEXT
//     },
//     area: {
//         type: Sequelize.STRING
//     },
//     unlisted_area: {
//         type: Sequelize.STRING
//     },
//     city: {
//         type: Sequelize.STRING
//     },
//     status: {
//         type: Sequelize.BOOLEAN
//     }
// }, {
//     // Other model options go here
// });

// module.exports = User;
module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define(dbTables.tables.customers, {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        whatsapp_no: {
            type: Sequelize.STRING
        },
        alt_delivery_contact: {
            type: Sequelize.STRING
        },
        phone_1: {
            type: Sequelize.STRING
        },
        phone_2: {
            type: Sequelize.STRING
        },
        pin_location: {
            type: Sequelize.TEXT
        },
        complete_address: {
            type: Sequelize.TEXT
        },
        distance_from_shop: {
            type: Sequelize.TEXT
        },
        area: {
            type: Sequelize.STRING
        },
        unlisted_area: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return customer;
};