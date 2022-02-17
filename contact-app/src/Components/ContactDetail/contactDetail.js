import React from "react";
import { Link, useParams } from "react-router-dom";
import UserIcon from "../../images/user-icon.png";

function ContactDetail({ contacts }) {
  let params = useParams(); // useParams uses the parameter passed in the current route...

  //   const number = params.contactId;
  //   const contact = (number) => {
  //     return props.contacts.find((contact) => contact.id === number);
  //   };
  //   console.log(contact);

  function getContacts(number) {
    return contacts.find((contact) => contact.id === number);
  }

  let contact = getContacts(params.contactId);
  //   console.log(contact);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-4">
      <div className="border border-dark w-75s h-25 p-3 text-center">
        <div>
          <img src={UserIcon} className="img-fluid" alt="user-icon"></img>
        </div>
        <div className="pt-3">
          <h2>Name : {contact.name}</h2>
          <p>Email : {contact.email}</p>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
    </div>
  );
}

export default ContactDetail;
