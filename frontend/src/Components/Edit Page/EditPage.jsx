import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./editPage.css";

const EditPage = ({ handleGetData }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [available, setAvailable] = useState("");
  const location = useLocation();
  const params = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const udpateUser = () => {
    axios.patch(`https://heliverse-data.onrender.com/user/update/${params}`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      domain: domain,
      available: available,
    });

    navigate("/");
    alert("User updated");
    handleGetData();
  };

  return (
    <div className="EditPage">
      <h1>Edit Your Details</h1>
      <div className="input__fields">
        <div>
        <input
          type="text"
          placeholder="Enter Your First Name"
          name=""
          id=""
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        />
        </div>

        <div>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          name=""
          id=""
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        />
        </div>

        <div>
        <input
          type="text"
          placeholder="Enter Your Email Name"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        </div>

        <div>
        <select name="" id="" onChange={(e) => setDomain(e.target.value)}>
          <option>Select Domain</option>
          <option value="Sales">Sales</option>
          <option value="Management">Management</option>
          <option value="UI Designing">UI Designing</option>
          <option value="IT">IT</option>
        </select>
        </div>

        <div>
        <select name="" id="" onChange={(e) => setGender(e.target.value)}>
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        </div>

        <div>
        <select name="" id="" onChange={(e) => setAvailable(e.target.value)}>
          <option>Select Availibility</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        </div>

        <button onClick={udpateUser}>Update</button>
      </div>
    </div>
  );
};

export default EditPage;
