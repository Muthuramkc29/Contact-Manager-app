import { useEffect, useState } from "react";
import "./App.css";
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
      <Header />
      <ContactForm addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
