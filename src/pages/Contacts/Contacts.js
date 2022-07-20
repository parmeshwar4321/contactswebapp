import React, { useState } from "react";
import ContactsTable from "../components/ContactsTable";
import "./Contacts.css";
import { contactsData } from "../../utils/mockData";
import Goback from "../components/Goback";

const Contacts = () => {
  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ paddingTop: "1em" }}>
          <h4>ContactInfo</h4>
        </div>
        <div>
          {" "}
          <Goback />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // columnCount: 3
          // border: "solid #ccc 2px",
          padding: "1em",
        }}
      >
        {contactsData.length &&
          contactsData?.map((item, i) => {
            return (
              <ContactsTable
                key={i}
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                phoneNumber={item.phoneNumber}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Contacts;
