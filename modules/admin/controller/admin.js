const bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
const models = require('../../../database/models/index');
const { secret, sessionExpiry } = require('../../../configs/appconfig.json');

async function signIn(req, res) {
    const reqBody = req.body;
    try {
        if (!reqBody.username || !reqBody.password) {
            res.status(400).json({ message: 'Bad request' });
        }
        const adminUser = await models.admin.findOne({ where: { username: reqBody.username } });
        if (adminUser.status != 1) {
            res.json({ message: 'Admin is disabled' });
        }
        if (adminUser) {
            var passwordIsValid = bcrypt.compareSync(
                reqBody.password,
                adminUser.password
            );
            if (!passwordIsValid) {
                res.json({ auth: false, accessToken: null, message: "Invalid Password" });
            } else {
                var token = jwt.sign({ id: adminUser.id }, secret, {
                    expiresIn: sessionExpiry // expires in 24 hours
                });
                var session = { username: adminUser.username, token: token, expiresIn: sessionExpiry };
                const sessionCreated = await models.adminSessions.create(session);
                if (sessionCreated) {
                    res.json({ auth: true, accessToken: token, expiresIn: sessionExpiry });
                } else {
                    res.json({ auth: false, accessToken: null, message: 'Session could not be created' });
                }

            }
        } else {
            res.json({ auth: false, accessToken: null, message: "Admin user not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
async function signOut(req, res) {
    const reqBody = req.body;
    try {
        if (!reqBody.username || !reqBody.token) {
            res.status(400).json({ message: 'Bad request' });
        }
        const CurrentSession = await models.adminSessions.findOne({ where: { username: reqBody.username, token: reqBody.token } });
        await CurrentSession.destroy();
        res.json({ message: 'logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
module.exports = { signIn, signOut };