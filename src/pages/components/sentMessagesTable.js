import User from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

const ContactsTable = ({ id, firstName, lastName, phoneNumber, createdAt }) => {
  let navigate = useNavigate();
  const handler = () => {
    navigate(`/contactInfo/${id}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p style={{ padding: "2rem" }}>
          <IconButton>
            <User />
          </IconButton>
          {firstName} {lastName}
        </p>
        <p style={{ padding: "2rem" }}> {createdAt}</p>
        <p> {"sent"}</p>
      </div>
    </>
  );
};

export default ContactsTable;
