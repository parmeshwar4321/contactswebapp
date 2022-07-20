// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import SentMessagesTable from "../components/sentMessagesTable";
// const SentMessages = () => {
//   const [messages, setMessages] = useState([]);
//   async function fetchMessages() {
//     const url = "http://localhost:4242/messages";
//     const response = await axios.get(url);
//     return setMessages(response.data.data);
//   }

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   return (
//     <>
//       <div style={{ textAlign: "center" }}> SentMessages</div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           fontFamily: "roboto",
//         }}
//       >
//         <p> user</p>
//         <p>Sent Time</p>
//         <p>Otp sent</p>
//       </div>
//       <div>
//         {messages.length &&
//           messages?.map((item, i) => {
//             return (
//               <SentMessagesTable
//                 key={i}
//                 firstName={item.firstName}
//                 lastName={item.lastName}
//                 message={item.message}
//                 Otp={item.Otp}
//                 createdAt={item.createdAt}
//               />
//             );
//           })}
//       </div>
//       ;
//     </>
//   );
// };

// export default SentMessages;

import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "@mui/icons-material/PermIdentity";
import SentMessagesTable from "../components/sentMessagesTable";
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
        <div style={{ padding:"1em" }}> SentMessages</div>
        <div> <Goback /></div>
      </div>
      <div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell><b>User</b></TableCell>
              <TableCell><b>Sent Time</b></TableCell>
              <TableCell><b>Otp Sent</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <IconButton>
                      <User />
                    </IconButton>
                  </TableCell>
                  <TableCell>{item?.firstName} {item?.lastName}</TableCell>
                  <TableCell>{item?.createdAt.$date}</TableCell>
                  <TableCell align="center">{"sent"}
                  </TableCell>
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

const data = [{
  "_id": {
    "$oid": "62d6c15d142d10e0a0291292"
  },
  "firstName": "Shae",
  "lastName": "Chaloner",
  "message": "Hi  Your Otp is 587345",
  "phoneNumber": "+91 9076388126",
  "createdAt": {
    "$date": "2022-07-19T14:36:13.776Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:36:13.776Z"
  }
}, {
  "_id": {
    "$oid": "62d6c210aea977a1dd9f0e0c"
  },
  "firstName": "parmeshwar",
  "lastName": "rathod",
  "message": "Hi  Your Otp is 875361",
  "phoneNumber": "+91 907 638 8126",
  "createdAt": {
    "$date": "2022-07-19T14:39:12.435Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:39:12.435Z"
  }
}, {
  "_id": {
    "$oid": "62d6c3e55519667a4bb76be2"
  },
  "firstName": "parmeshwar",
  "lastName": "rathod",
  "message": "Hi  Your Otp is 961044",
  "phoneNumber": "+91 907 638 8126",
  "createdAt": {
    "$date": "2022-07-19T14:47:01.494Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:47:01.494Z"
  }
}, {
  "_id": {
    "$oid": "62d6c42da675d2770bf03edb"
  },
  "firstName": "parmeshwar",
  "lastName": "rathod",
  "message": "Hi  Your Otp is 803823",
  "phoneNumber": "+91 907 638 8126",
  "createdAt": {
    "$date": "2022-07-19T14:48:13.462Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:48:13.462Z"
  }
}, {
  "_id": {
    "$oid": "62d6c6189d51c78817c30a61"
  },
  "firstName": "parmeshwar",
  "lastName": "rathod",
  "message": "Hi  Your Otp is 276848",
  "phoneNumber": "+91 907 638 8126",
  "createdAt": {
    "$date": "2022-07-19T14:56:24.315Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:56:24.315Z"
  }
}, {
  "_id": {
    "$oid": "62d6c637574a5f7eced89871"
  },
  "firstName": "parmeshwar",
  "lastName": "rathod",
  "message": "Hi  Your Otp is 645693",
  "phoneNumber": "+91 907 638 8126",
  "createdAt": {
    "$date": "2022-07-19T14:56:55.360Z"
  },
  "updatedAt": {
    "$date": "2022-07-19T14:56:55.360Z"
  }
}]

