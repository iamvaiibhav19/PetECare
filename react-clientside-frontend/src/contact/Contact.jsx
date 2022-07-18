import React, { useState } from "react";
import "./style.css";
import contact_us from "./undraw_personal_email_re_4lx7.svg";
import axios from "axios";
import Swal from "sweetalert2";
const Contact = () => {
  // const [records, setRecords] = useState([]);

  const [userContact, setuserContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://petecare.herokuapp.com/api/v1/contact/newContact",
        userContact
      )
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            title: "Success",
            text: "Your message has been sent successfully, confirmation will be sent to your email",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setuserContact({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container"
      id="container1"
      style={{
        backgroundColor: "#fdfdfd",
      }}
    >
      <div
        className="forms-container"
        style={{
          fontSize: "2.5rem",
        }}
      >
        <div className="contactUs">
          <div className="contact-us-form">
            <form
              action=""
              method="POST"
              onSubmit={handleSubmit}
              style={{
                position: "relative",
                bottom: "70px",
              }}
            >
              <h2
                className="title"
                style={{
                  fontSize: "2.5rem",
                }}
              >
                Contact Us
              </h2>

              <div className="input-field">
                <i className="fas fa-phone fa-rotate-90"></i>
                <input
                  style={{
                    fontSize: "1.4rem",
                  }}
                  type="text"
                  value={userContact.name}
                  onChange={(e) => {
                    setuserContact({ ...userContact, name: e.target.value });
                  }}
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  style={{
                    fontSize: "1.4rem",
                  }}
                  value={userContact.email}
                  onChange={(e) => {
                    setuserContact({ ...userContact, email: e.target.value });
                  }}
                  name="email"
                  placeholder="Email id"
                  required
                />
              </div>
              <div className="input_field_textarea">
                <i className="fas fa-comment-alt"></i>
                <textarea
                  style={{
                    fontSize: "1.4rem",
                  }}
                  value={userContact.message}
                  onChange={(e) => {
                    setuserContact({ ...userContact, message: e.target.value });
                  }}
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn solid"
                style={{
                  fontSize: "1.4rem",
                }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <img
          src={contact_us}
          className="image"
          alt=""
          style={{
            height: "500px",
            position: "relative",
            top: "50px",
            left: "30px",
            padding: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
