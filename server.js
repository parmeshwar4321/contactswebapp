const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { sendText } = require("./twilioHandler");

const app = express();
app.use(express.static("public"));
app.use(express.json());
var corsOptions = {
  Origin: "['http://localhost:3000]",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
//db connection
const url = process.env.MongoURI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the database"))
  .catch((err) => {
    console.log(err);
  });

//schema for contacts
const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    message: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    otp: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Contact = mongoose.model("userContact", ContactSchema);

app.get("/messages", async (req, res) => {
  try {
    const message = await Contact.find().sort({ _id: -1 });
    return res.send({ data: message, success: true });
  } catch (error) {
    return res.send({ msg: error.message.replace(/\"/g, ""), success: false });
  }
});
app.post("/sendMessage", async (req, res) => {
  try {
    const { message, Otp, firstName, lastName, phoneNumber } = req.body;
    const textResponse = await sendText(message, phoneNumber);

    if (!textResponse.sucess) {
      return res.send({
        message: textResponse.message,
        success: false,
      });
    }
    await Contact.create({
      message,
      Otp,
      firstName,
      lastName,
      phoneNumber,
    });
    return res.send({
      message: "message sent successfully",
      success: true,
    });
  } catch (error) {
    return res.send({ msg: error.message.replace(/\"/g, ""), success: false });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
