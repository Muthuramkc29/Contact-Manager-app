import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ContactForm({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ id: uuidv4(), name: name, email: email });
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form className="px-3" onSubmit={handleAdd}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button className="btn btn-primary mb-3">Add Contact</button>
        <hr></hr>
      </form>
    </div>
  );
}

export default ContactForm;
