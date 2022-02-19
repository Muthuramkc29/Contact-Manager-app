import React from "react";
import { Link } from "react-router-dom";
import "./trash.css";
import api from "../../api/axiosConfig";
import userIcon from "../../images/user-icon.png";

function Trash({ trashContacts, setTrashContacts, restoreHandler, loading }) {
  const deleteTrashHandler = async (id) => {
    await api.delete(`/recyclebin/${id}`);
    const newTrashContacts = trashContacts.filter((contact) => {
      return contact.id !== id;
    });
    setTrashContacts(newTrashContacts);
  };

  return (
    <div>
      {loading ? (
        <div>
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
        </div>
      ) : (
        <div>
          <h4 className="ms-3 mb-3">Trash Bin</h4>
          <Link to="/">
            <button className="btn btn-sm btn-secondary ms-3"> Back </button>
          </Link>
          {trashContacts.length !== 0 ? (
            trashContacts.map((contact) => (
              <div key={contact.id}>
                <div className="my-3 mx-3 d-flex justify-content-between align-items-center border border-dark p-2">
                  {/* <Link
            style={{ color: "black", textDecoration: "none" }}
            to={`/${contact.id}`}
          > */}
                  <div className="d-flex justify-content-between align-items-start gap-3">
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

                  <div className="me-3 d-flex align-items-center gap-3">
                    <div
                      role="button"
                      onClick={() => {
                        restoreHandler(contact.id, contact.name, contact.email);
                      }}
                      style={{ fontSize: 13 }}
                    >
                      RESTORE
                    </div>
                    <div
                      role="button"
                      onClick={() => {
                        deleteTrashHandler(contact.id);
                      }}
                      style={{ fontSize: 13 }}
                    >
                      DELETE
                    </div>
                  </div>
                  {/* </Link> */}
                  {/* <div className="d-flex">
            <Link to="/edit" state={{ contact: contact }}>
              <div>
                <img
                  className="img-fluid me-3"
                  src={editIcon}
                  alt="edit-Icon"
                  style={{ width: 25, height: 25 }}
                  role="button"
                />
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
          </div> */}
                </div>

                {/* <Outlet /> */}
              </div>
            ))
          ) : (
            <div>
              <p className="text-center mt-5">
                Currently, No contacts Deleted!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Trash;
