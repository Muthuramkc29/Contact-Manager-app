import React from "react";
import api from "../../api/axiosConfig";
import { Link } from "react-router-dom";
import Contact from "../Contact/contact";

function ContactList({
  contacts,
  setContacts,
  trashContacts,
  setTrashContacts,
  loading,
}) {
  const removeContactHandler = async (id, name, email) => {
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(newContacts);
    setContacts(newContacts);
    const request = {
      id,
      name,
      email,
    };
    const response = await api.post("/recyclebin", request);
    setTrashContacts([...trashContacts, response.data]);
  };

  return (
    <div className="px-3">
      <div className="py-2 text-start d-flex justify-content-between">
        <h4>Contact List</h4>
        <div>
          <Link to="/trash">
            <button className="btn btn-sm btn-secondary me-1">
              Recycle bin
            </button>
          </Link>
          <Link to="/add">
            <button className="btn btn-sm btn-primary me-1">Add Contact</button>
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
        </div>
      ) : (
        <Contact
          contacts={contacts}
          removeContactHandler={removeContactHandler}
        />
      )}
      {/* <Contact
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      /> */}
    </div>
  );
}

export default ContactList;
