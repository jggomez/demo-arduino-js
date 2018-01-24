/*
    Juan Guillermo Gómez
*/

const nodemailer = require("nodemailer");
const jf = require("johnny-five");
const board = jf.Board();

let led1;

board.on("ready", () => {
    led1 = new jf.Led(13);
    motion = new jf.Motion(7);

    motion.on("calibrated", () => {
        console.log("Calibrated");
    });

    motion.on("motionstart", () => {
        console.log("motionstart");
        led1.on();
        sendEmail();
    });

    motion.on("motionend", () => {
        led1.off();
        console.log("motionend");
    });

});


function sendEmail() {

    const mailTransport = nodemailer.createTransport({
        host: 'server3.hostingfacil.co',
        port: 465,
        secure: true,
        auth: {
            user: "jggomez@devhack.co",
            pass: "XXXXX"
        }
    });

    const mailOptions = {
        from: "juan.gomez01@gmail.com",
        to: "juan.gomez01@gmail.com"
    };

    mailOptions.subject = "Warning: Strange Movement";
    mailOptions.html = "<html><body><h1>Warning: Strange Movement</h1></html></body>";

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('New welcome email sent');
    }).catch((error) => {
        console.error(error);
    });

}
