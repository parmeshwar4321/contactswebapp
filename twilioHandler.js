require("dotenv/config");

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require("twilio")(accountSid, authToken, {
  lazyLoading: true,
});

const sendText = async (message, sendersId) => {
  try {
    const res = await client.messages.create({
      body: message,
      to: sendersId,
      from: "+19794066318",
    });
    return { sucess: true, message: res };
  } catch (error) {
    return { sucess: false, message: error };
  }
};

module.exports = { sendText };
