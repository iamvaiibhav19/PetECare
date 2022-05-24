import React from "react";
import img1 from "./vaibhav4.jpg";
import img2 from "./om.jpeg";
import img3 from "./kshitija2.jpeg";
import img4 from "./niraj.jpg";

//import instagram , linkedIn , github from "fontawersome";

import "./About.css";

const About = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          position: "relative",
          top: "10px",
        }}
      >
        <h3
          style={{ color: "#6C63FF", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Our Team
        </h3>
      </div>
      <div
        className="row1"
        style={{
          border: "1px solid #b3b0f2",
          position: "relative",
          bottom: "40px",
        }}
      >
        <div className="col1">
          <span></span>
          <img
            src={img1}
            alt=""
            style={{
              height: "302px",
            }}
          />
        </div>
        <div className="col1">
          <p>Vaibhav Magar</p>

          <h3>Roll No : 41</h3>
          <div className="social-link"></div>
        </div>
        <div className="col1">
          <span></span>
          <img
            src={img2}
            alt=""
            style={{
              height: "302px",
            }}
          />
        </div>
        <div className="col1">
          <p>Om Mahajan</p>

          <h3>Roll No : 42</h3>
          <div className="social-link"></div>
        </div>
        <div className="col1">
          <p>Niraj Mali</p>

          <h3>Roll No : 43</h3>
          <div className="social-link"></div>
        </div>
        <div className="col1">
          <span className="arrow"></span>
          <img
            src={img4}
            alt=""
            style={{
              height: "302px",
            }}
          />
        </div>

        <div className="col1">
          <p>Kshitija Malode</p>

          <h3>Roll No : 44</h3>
          <div className="social-link"></div>
        </div>
        <div className="col1">
          <span className="arrow"></span>
          <span className="arrow"></span>
          <img
            src={img3}
            alt=""
            style={{
              height: "302px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
