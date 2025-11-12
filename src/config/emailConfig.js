const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASSWORD } = require('./serverConfig');

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: userId,
        pass: password
    }
});

module.exports = sender;