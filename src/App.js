import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactDetail from "./Components/ContactDetail/contactDetail";
import ContactForm from "./Components/ContactForm/contactForm";
import ContactList from "./Components/ContactList/contactList";
import Header from "./Components/Header/header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route
            path="/add"
            element={<ContactForm addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path=":contactId"
            element={<ContactDetail contacts={contacts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
