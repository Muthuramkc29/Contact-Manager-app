import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "./api/axiosConfig";
import ContactDetail from "./Components/ContactDetail/contactDetail";
import ContactForm from "./Components/ContactForm/contactForm";
import ContactList from "./Components/ContactList/contactList";
import Header from "./Components/Header/header";
import EditContact from "./Components/EditContact/editContact";
import Trash from "./Components/Trash/trash";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const [trashContacts, setTrashContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // setContacts(retriveContacts);
    const retriveContacts = async () => {
      setLoading(true);
      const response = await api.get("/contacts");
      setLoading(false);
      console.log(response);
      setContacts(response.data);
    };

    retriveContacts();

    const retriveTrashContacts = async () => {
      const response = await api.get("/recyclebin");
      setTrashContacts(response.data);
    };

    retriveTrashContacts();
  }, []);

  // useEffect(() => {
  //    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const addContactHandler = async (contact) => {
    const request = contact;
    // console.log(request);
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const request = contact;
    // console.log(request);
    const response = await api.put(`/contacts/${contact.id}`, request);
    const { id, name, email } = response.data;
    console.log(id);
    console.log(name);
    console.log(email);
    // console.log(response.data);
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { id, name, email } : contact;
      })
    );
  };

  const restoreHandler = async (id, name, email) => {
    await api.delete(`/recyclebin/${id}`);
    setTrashContacts(
      trashContacts.filter((contact) => {
        return contact.id !== id;
      })
    );
    const request = {
      id,
      name,
      email,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

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
              <ContactList
                contacts={contacts}
                setContacts={setContacts}
                trashContacts={trashContacts}
                setTrashContacts={setTrashContacts}
                loading={loading}
              />
            }
          />
          <Route
            path=":contactId"
            element={<ContactDetail contacts={contacts} />}
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />
          <Route
            path="/trash"
            element={
              <Trash
                trashContacts={trashContacts}
                setTrashContacts={setTrashContacts}
                restoreHandler={restoreHandler}
                loading={loading}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
