const jwt = require('jsonwebtoken');
var {User} = require('./../models/user.js');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');
    var clientIP = req.connection.remoteAddress;

    User.findByToken(token).then((user) => {
        try {
            var decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            return Promise.reject();
        }
        if (!user || decoded.ip !== clientIP ) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    });
};

module.exports = {
    authenticate
}
