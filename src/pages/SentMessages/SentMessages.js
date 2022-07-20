import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "@mui/icons-material/PermIdentity";
import Goback from "../components/Goback";
const SentMessages = () => {
  const [messages, setMessages] = useState([]);
  async function fetchMessages() {
    const url = "http://localhost:4242/messages";
    const response = await axios.get(url);
    return setMessages(response.data.data);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "1em" }}> SentMessages</div>
        <div>
          <Goback />
        </div>
      </div>
      <div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <b>User</b>
              </TableCell>
              <TableCell>
                <b>Sent Time</b>
              </TableCell>
              <TableCell>
                <b>Otp Sent</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages?.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <IconButton>
                      <User />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {item?.firstName} {item?.lastName}
                  </TableCell>
                  <TableCell>{item?.createdAt.$date}</TableCell>
                  <TableCell align="center">{"sent"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SentMessages;
