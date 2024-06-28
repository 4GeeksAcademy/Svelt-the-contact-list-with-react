import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  let params = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    let data = store.contacts.find((item) => item.id == params.theid);
    setContact(data);
  }, []);

  const editContact = async () => {
    let result = await actions.editContact(
      id,
      contact.name,
      contact.phone,
      contact.email,
      contact.address
    );
    if (result) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const deleteContact = () => {
    actions.deleteContact(id);
    navigate("/");
  };
  return (
    <div className="d-flex-column align-utems-center">
      <h1>Edit contact</h1>
      <div className="edit-contact-form text-center">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleInputChange}
        />
        <br />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleInputChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleInputChange}
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={contact.address}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={() => editContact()}>Save Changes</button>
      </div>
    </div>
  );
};
