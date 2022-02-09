import React from "react";
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
    <div className="px-3 ">
      <div className="py-2 text-center ">
        <h3>Contact List</h3>
      </div>
      <Contact
        contacts={contacts}
        removeContactHandler={removeContactHandler}
      />
    </div>
  );
}

export default ContactList;
