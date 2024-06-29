import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, body) => {
    try {
        const tranSporter = nodemailer.createTranSport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        await tranSporter.sendMail({
            from: `"Tomato || Sport Delivery App" <kvakte00@gmail.com>`,
            to: email,
            subject,
            attachments: [{
                filename: 'logo.png',
                path: './utils/logo.png',
                cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
           }],
            html: body
        });
        console.log("Email sent successfully.")
    } catch (error) {
        console.log(error);
    }
}

export default sendEmail;