"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = require("../shared/helper/logger");
const { mailtrapUsername, mailtrapPassword } = require("./config");
exports.sendEmail = async (url, options) => {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: mailtrapUsername,
            pass: mailtrapPassword
        },
    });
    let mailoptions = {
        from: '"Rentals" ayeahgodlove5@gmail.com',
        to: options.email,
        subject: options.subject,
        html: `
        <p> ${options.message}</>
        <span> ${options.text1}</span> 
        <a href=${url}">verification code</a> 
        
        <span> ${options.text2} <span>`
    };
    transporter.sendMail(mailoptions, function (err, info) {
        if (err)
            return logger_1.logger.info(err);
        return logger_1.logger.info(info);
    });
};
