const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASSWORD } = require('./serverConfig');

const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD

    }

});

module.exports = sender;