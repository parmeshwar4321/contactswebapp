import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import ContactInfo from "./pages/Contacts/ContactInfo";
import SentMessages from "./pages/SentMessages/SentMessages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/sentMessages" element={<SentMessages />} />
          <Route
            exact
            path="/contactInfo/:contactId"
            element={<ContactInfo />}
          />
          <Route exact path="/*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
