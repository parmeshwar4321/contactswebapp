import User from "@mui/icons-material/PermIdentity";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Card } from "@mui/material";

const ContactsTable = ({ id, firstName, lastName, phoneNumber }) => {
  let navigate = useNavigate();
  const handler = () => {
    navigate(`/contactInfo/${id}`);
  };
  return (
    <div>
      <Card
        component={Link}
        onClick={handler}
        style={{
          widht: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em",
          boxShadow: 1,
          textDecoration: "none",
          color: "#688bc8",
          cursor: "pointer",
        }}
      >
        <div>
          <IconButton>
            <User />
          </IconButton>
          {firstName} {lastName}
        </div>
      </Card>
    </div>
  );
};

export default ContactsTable;
