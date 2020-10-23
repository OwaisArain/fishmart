const jwt = require("jsonwebtoken");
const { secret } = require('../configs/appconfig.json');
const db = require('../database/models');
const admin = db.admin;


exports.authorize = function (req, res, next) {
    var token = req.headers.authorization;
    if (!token) {
        return res.status(403).send({ auth: false, message: "Unauthorized" });
    } else {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, secret, async (err, decoded) => {
            if (err) {
                return res.status(403).send({ auth: false, message: "Token authorization failed: " + err });
            }
            var adminUserExists = await admin.findByPk(decoded.id);
            if (!adminUserExists) {
                return res.status(403).send({ auth: false, message: "Invalid token provided" });
            } else {
                return next();
            }
        });
    }
}