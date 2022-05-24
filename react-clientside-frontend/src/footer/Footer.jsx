/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Footer.css";
import axios from "axios";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8080/api/v1/mail/sendMail", {
        email: email,
      })
      .then((res) => {
        if (res) {
          Swal.fire(
            "Success!",
            "You are subscribed to PetECare now! Confirmation mail is being sent to your Email.",
            "success"
          );
          setEmail("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <footer
      className="new_footer_area bg_color"
      style={{
        // border: "1px solid red",
        fontSize: "1.9rem",
      }}
    >
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3
                  className="f-title f_600 t_color f_size_18"
                  style={{
                    fontSize: "1.9rem",
                  }}
                >
                  Get in Touch
                </h3>
                <p
                  style={{
                    fontSize: "1.9rem",
                  }}
                >
                  Don’t miss any updates or offers on services for your pet!
                </p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  novalidate="true"
                  _lpchecked="1"
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      fontSize: "1.5rem",
                    }}
                  />
                  <button
                    className="btn btn_get btn_get_two"
                    type="submit"
                    style={{
                      fontSize: "1.5rem",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    Subscribe
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{
                      display: "none",
                    }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{
                      display: "none",
                    }}
                  ></p>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                  marginLeft: "120px",
                }}
              >
                <ul className="list-unstyled f_list"></ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                  marginLeft: "120px",
                }}
              >
                <ul className="list-unstyled f_list"></ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                  marginLeft: "120px",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Team PetECare
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container" id="containerr">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © All rights reserved to Team PetECare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
