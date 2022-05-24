/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import img1 from "./undraw_doctors_hwty1.svg";
import img2 from "./undraw_good_doggy_-4-wfq.svg";
import img3 from "./undraw_nature_fun_re_iney.svg";
import img4 from "./undraw_mobile_payments_re_7udl.svg";
import { useNavigate } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div
          className="home-image"
          style={{
            position: "relative",
            left: "20px",
          }}
        >
          <img src={img1} alt="" />
        </div>
        <div
          className="text"
          style={{
            fontsize: "2.2rem",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp;&nbsp;<strong>PetECare</strong> has a goal to
            eridicate life threatening disease of animal such as Rabies, Canine
            Distemper, Gastroenteritis, etc.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; We are providing all the facilities and servies to
            strays and pets with dignity and following veternary medical
            ethics.&nbsp;Our goal is to preserve quality of life and alleviate
            pain while making sure that we work with our pet owners as best we
            can to help them care for their pets.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; Explore the services we provide and goals we have.
          </p>
          <div class="wrapper" onClick={() => navigate("/services")}>
            <a class="button">Explore</a>
          </div>
          <svg
            style={{
              visibility: "hidden",
              position: "absolute",
            }}
            width="0"
            height="0"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="home1"
        style={
          {
            // border: "1px solid red",
          }
        }
      >
        <div className="text1">
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp;&nbsp; Connect with Pet-E-Care to book
            appointments for services and manage your pet’s health needs.
            Pet-E-Care offer a wide range of pet services.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; Pet-E-Care services include vaccinations, general
            treatment, flea & tick control,   deworming, grooming, dental care
            and many more. With easy online booking, you can schedule
            appointments for many services as per your convenient. Pet-E-Care is
            your all in one solution for your pet needs.
          </p>

          <div class="wrapper">
            <a class="button" onClick={() => navigate("/register")}>
              Register
            </a>
          </div>
        </div>
        <div className="home1-image" style={{}}>
          <img src={img4} alt="" />
        </div>
      </div>

      <div
        className="home2"
        style={
          {
            // border: "1px solid red",
          }
        }
      >
        <div className="home2-image" style={{}}>
          <img src={img2} alt="" />
        </div>
        <div className="text2">
          <h4
            style={{
              fontSize: "2.4rem",
              color: "black",
            }}
          >
            &nbsp; &nbsp; <string>Be an Angel for Strays!</string>
          </h4>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp;&nbsp;Approximately 1478 dogs & cats die every
            day on road in India. etc.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; Let's take a mission to provide not only dog and cat
            but all animals a home before 2035. It's just one of the way to be a
            part of huge change. Join the Community and help setting up Pet
            houses in your surrounding for strays.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; Rather than buying a pet, make a stray one your pet.
            So that they will be having a home. And they will be able to live in
            a safe and secure environment. We are here to help you.
          </p>
        </div>
      </div>

      <div className="home3">
        <div className="text3">
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; &nbsp;&nbsp;<strong>Shelter and shade, </strong>During
            summer months, animals instinctively look for sheltered places to
            shelter themselves.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; A lot of them hide under cars to protect themselves
            but that can be dangerous. Creating a temporary shelters around with
            discarded cardboard boxes of cloth to help them will be highly
            appreciated.
          </p>
          <p style={{ textAlign: "justify" }}>
            &nbsp; &nbsp; Also, you could open your gates to the street animals
            and perhaps let them in the front porch of your house this generous
            act will help save alot of animals.
          </p>
        </div>
        <div
          className="home3-image"
          style={{
            position: "relative",
            left: "20px",
          }}
        >
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
