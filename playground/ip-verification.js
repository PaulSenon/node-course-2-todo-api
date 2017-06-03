const express = require('express');
const jwt = require('jsonwebtoken');

var user = {
    _id: 'ds6f56s5d4fsd654sdf',
    email: 'lol@gmail.com',
    password: 'superpassword',
    tokens: []
}
var app = express();

app.get('/setip', (req, res) => {
    var ipClient = req.connection.remoteAddress;
    console.log('Client IP :', ipClient);
    var id = user._id;
    var access = 'auth';
    var token = jwt.sign({id, access, ip: ipClient}, 'supersecret').toString();
    user.tokens.push({access, token, ip: ipClient});

    console.log(JSON.stringify(user, undefined, 2));

    res.status(200).send();
});

app.get('/auth', (req, res) => {
    var ipClient = req.connection.remoteAddress;
    console.log('Client IP :', ipClient);

    var id = user._id;
    var access = 'auth';
    var token = jwt.sign({id, access, ip: ipClient}, 'supersecret').toString();


    decoded = jwt.verify(token, 'supersecret');
    // console.log(JSON.stringify(decoded, undefined, 2));
    console.log(token);
    if(token === user.tokens[0].token){
        if(decoded.ip === user.tokens[0].ip){
            console.log('Authorized', `${ipClient} = ${user.tokens[0].ip}`);
        }else{
            console.log('Refused, invalid IP');
        }
    } else {
        console.log('Refused, invalid token');
    }


    res.status(200).send();
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
