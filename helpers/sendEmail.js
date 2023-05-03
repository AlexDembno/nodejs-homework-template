const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY, EMAIL_FROM } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_FROM };
  sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "hogesi1798@meidecn.com",
//   from: EMAIL_FROM,
//   subject: "Test email",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<p>Test email</p>",
// };

// sgMail
//   .send(email)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
