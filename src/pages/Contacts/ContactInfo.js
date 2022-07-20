import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Draggable from "react-draggable";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import User from "@mui/icons-material/AccountBox";
import Phone from "@mui/icons-material/Phone";
import { contactsData } from "../../utils/mockData";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Goback from "../components/Goback";

const ContactInfo = () => {
  const { contactId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [diable, setDisable] = React.useState(false);
  const [Otp, setOtp] = React.useState(null);
  const [contactInfo, setContactInfo] = useState({});
  const [message, setMessage] = useState("Hi  Your Otp is ...");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const confirmSent = (toastHandler = toast) =>
    toastHandler.success(`message sent successfully!`, {
      style: {
        background: "green",
        color: "#fff",
      },
    });
  const handleClose = (e, value) => {
    setOpen(false);
  };

  const sendMsgHandler = async (e) => {
    const payload = {
      ...contactInfo,
      Otp,
      message,
    };
    try {
      let response = await axios.post(
        `http://localhost:4242/sendMessage`,
        payload,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response?.data.success) {
        confirmSent();
      } else {
        toast.error(`message not sent !`, {
          style: {
            background: "red",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
    setDisable(true);
  };

  function otpGenerator() {
    const Otp = parseInt(Math.floor(100000 + Math.random() * 900000));
    setMessage(`Hi  Your Otp is ${Otp}`);

    return Otp;
  }
  function getContactInfo() {
    return contactsData.filter((contact) => contact.id === contactId);
  }
  useEffect(() => {
    setOtp(otpGenerator());
    setContactInfo(...getContactInfo());
  }, []);
  return (
    <>
     <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div> <h2> ContactInfo</h2></div>
        <div> <Goback /></div>
      </div>
      <div
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            padding: "2px 16px",
            height: "500px",
            width: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <IconButton>
              <User fontSize="large" />
            </IconButton>
            {contactInfo.firstName} {contactInfo.lastName}
          </div>
          <div>
            <IconButton>
              <Phone fontSize="large" />
            </IconButton>
            {contactInfo.phoneNumber}
          </div>
          <div>
            <Button
              variant="contained"
              color="success"
              startIcon={<SendIcon />}
              onClick={handleClickOpen}
              disabled={diable}
            >
              Send Message
            </Button>
            <Toaster position="top-right" reverseOrder={false} />
            <Dialog
              open={open}
              onClose={handleClose}
              PaperComponent={PaperComponent}
              aria-labelledby="draggable-dialog-title"
            >
              <DialogTitle
                style={{ cursor: "move" }}
                id="draggable-dialog-title"
              >
                New Message
              </DialogTitle>
              <DialogContent>
                <TextField value={message} />
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={sendMsgHandler}>
                  <SendIcon />
                  Send
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default ContactInfo;
