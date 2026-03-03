
const { sendEmail } = require("../utillity/mail-utility");

async function borrowEmail(req, resp, next) {
        try {
            let response = await sendEmail(
                req.body.mail.to,
                req.body.mail.subject,
                req.body.mail.text,
                req.body.mail.html
            );
        } catch (error) {
                next(error)
        }
}

module.exports = {
    borrowEmail
}