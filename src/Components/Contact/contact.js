import React from "react";
import { Link, Outlet } from "react-router-dom";
import trashIcon from "../../images/trash.png";
import userIcon from "../../images/user-icon.png";

function Contact({ contacts, removeContactHandler }) {
  return (
    <div>
      {contacts.length !== 0 ? (
        contacts.map((contact) => (
          <div key={contact.id}>
            <div className="my-3 d-flex justify-content-between align-items-center border border-dark p-2">
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/${contact.id}`}
              >
                <div className="d-flex justify-content-between align-items-start gap-3">
                  <div>
                    <img
                      src={userIcon}
                      alt="User-Icon"
                      style={{ width: 43, height: 43 }}
                    />
                  </div>

                  <div>
                    <h5 style={{ fontSize: 18, padding: 0, margin: 0 }}>
                      {contact.name}
                    </h5>
                    <p style={{ fontSize: 16, padding: 0, margin: 0 }}>
                      {contact.email}
                    </p>
                  </div>
                </div>
              </Link>
              <div>
                <img
                  className="img-fluid me-3"
                  src={trashIcon}
                  alt="Trash-Icon"
                  style={{ width: 25, height: 25 }}
                  role="button"
                  onClick={() => {
                    removeContactHandler(contact.id);
                  }}
                />
              </div>
            </div>

            <Outlet />
          </div>
        ))
      ) : (
        <div>
          <p className="text-center mt-5">Currently, No contacts Available!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
