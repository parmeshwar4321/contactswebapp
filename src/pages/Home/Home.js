import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import Contacts from "@mui/icons-material/ContactPage";

import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e);
    navigate("/contacts");
  };
  const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Contacts Web App
          </ListSubheader>
        }
      >
        <ListItemButton component={Link} to="/contacts">
          <ListItemIcon>
            <Contacts />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItemButton>
        <ListItemButton component={Link} to="/sentMessages">
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent Messages" />
        </ListItemButton>
      </List>
    </>
  );
}
