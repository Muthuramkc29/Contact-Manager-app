import React from "react";
import { Link, Outlet } from "react-router-dom";
// import styled from "styled-components";
import "./contact.css";
import userIcon from "../../images/user-icon.png";
// import trashIcon from "../../images/trash.png";
// import editIcon from "../../images/edit-icon.png";

const Contact = ({ contacts, removeContactHandler }) => {
  return (
    <div>
      {contacts.length !== 0 ? (
        contacts.map((contact) => (
          <div key={contact.id}>
            <div className="my-3 d-flex justify-content-between align-items-center border border-dark p-2">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <div>
                  <img
                    src={userIcon}
                    alt="User-Icon"
                    style={{ width: 43, height: 43 }}
                  />
                </div>
                <div>
                  <h5 className="name">{contact.name}</h5>
                  <p className="email">{contact.email}</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/${contact.id}`}
                >
                  <i
                    className="pi pi-eye me-3"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </Link>

                <Link to="/edit" state={{ contact: contact }}>
                  {/* <div>
                    <img
                      className="img-fluid me-3"
                      src={editIcon}
                      alt="edit-Icon"
                      style={{ width: 25, height: 25 }}
                      role="button"
                    />
                  </div> */}
                  <i
                    className="pi pi-user-edit me-3"
                    style={{ fontSize: "1.5em" }}
                  ></i>
                </Link>

                <div>
                  {/* <img
                    className="img-fluid me-1"
                    src={trashIcon}
                    alt="Trash-Icon"
                    style={{ width: 25, height: 25 }}
                    role="button"
                    onClick={() => {
                      removeContactHandler(
                        contact.id,
                        contact.name,
                        contact.email
                      );
                    }}
                  /> */}

                  <i
                    className="pi pi-trash me-1"
                    style={{ fontSize: "1.3em" }}
                    role="button"
                    onClick={() => {
                      removeContactHandler(
                        contact.id,
                        contact.name,
                        contact.email
                      );
                    }}
                  ></i>
                </div>
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
};

export default Contact;

// const ContactDiv = styled.div`
//   h5 {
//     margin: 0;
//     padding: 0;
//     font-size: 16px;
//     width: 170px;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }

//   p {
//     margin: 0;
//     padding: 0;
//     font-size: 14px;
//     width: 170px;
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }
// `;
