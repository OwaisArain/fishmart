const express = require('express');
const app = express();
const adminRoutes = require('./modules/admin/routes/adminRoutes');
const customerRoutes = require('./modules/customer/routes/customerRoutes');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
const db = require('./database/models/index');
try {
    // sequelize.authenticate();
    console.log('Connection has been established successfully.');
    db.sequelize.authenticate().then(() => {
        // db.sequelize.sync();
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

app.use('/', adminRoutes);
app.use('/customer', customerRoutes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});