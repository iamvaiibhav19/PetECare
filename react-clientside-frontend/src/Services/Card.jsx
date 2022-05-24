import React from "react";
import "./Card.css";
// import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const { title, minDescription, image, description } = props;
  console.log(props);

  //pass props to ServicePage to display the service details in the new page on click
  const handleClick = () => {
    navigate(`/services/${title}`);
  };

  return (
    <div className="col-md-3">
      <div
        id="card-container"
        className="card text-center"
        onClick={handleClick}
      >
        <img src={image} alt="" />
        <div className="card-details">
          <h5
            style={{
              color: "#6C63FF",
            }}
          >
            {title}
          </h5>
          <p id="card-p">{minDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
