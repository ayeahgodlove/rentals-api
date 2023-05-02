import nodemailer from "nodemailer";
import { logger } from "../shared/helper/logger";

const {
    mailtrapUsername,
    mailtrapPassword
} = require("./config")

exports.sendEmail = async (url: string, options: any) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: mailtrapUsername,
        pass: mailtrapPassword
        },
    })

    let mailoptions = {
        from: '"Rentals" ayeahgodlove5@gmail.com',
        to: options.email,
        subject: options.subject,
        html: `
        <p> ${options.message}</>
        <span> ${options.text1}</span> 
        <a href=${url}">verification code</a> 
        
        <span> ${options.text2} <span>`
    }

    transporter.sendMail(mailoptions, function (err, info) {
        if (err) return logger.info(err)

        return logger.info(info)
    })
}