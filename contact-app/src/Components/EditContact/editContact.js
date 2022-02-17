import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditContact({ updateContactHandler }) {
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location);
  const { contact } = location.state;
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  // console.log(name, Name);
  // console.log(email, Email);
  const { id } = contact;

  const handleUpdate = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler({ id, name, email });
    console.log({ id, name, email });
    // setEmail("");
    // setName("");
    navigate("/");
  };

  return (
    <div>
      <h3 className="px-3 mb-4">Edit Contact</h3>
      <form className="px-3" onSubmit={handleUpdate}>
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
        <button className="btn btn-primary mb-3">Edit Contact</button>
      </form>
    </div>
  );
}

export default EditContact;
