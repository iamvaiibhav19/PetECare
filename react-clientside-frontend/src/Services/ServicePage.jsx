import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ServicePage.css";

import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({});
  //get the service title from the url
  const title1 = window.location.pathname.split("/")[2];

  const fetchService = () => {
    axios
      .get(`http://localhost:8080/api/v1/services/getServiceByTitle/${title1}`)
      .then((data) => {
        console.log(data.data.data.service, "service");
        setService(data.data.data.service);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchService();
  }, []);

  const { title, description, image } = service;
  console.log(description, "description");

  return (
    <div
      className="service-container"
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="para1">
        <p>&nbsp; &nbsp; &nbsp;{description && description.para1}</p>
      </div>
      <div className="para1">
        <p>&nbsp; &nbsp; &nbsp;{description && description.para2}</p>
      </div>
      <div className="para3">
        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
