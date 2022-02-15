import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/contact";

function ContactList({ contacts, setContacts }) {
  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(newContacts);
    setContacts(newContacts);
  };

  return (
    <div className="px-3">
      <div className="py-2 text-start d-flex justify-content-between">
        <h3>Contact List</h3>
        <Link to="/add">
          <button className="btn btn-primary me-3">Add Contact</button>
        </Link>
      </div>
      <Contact
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      />
    </div>
  );
}

export default ContactList;
