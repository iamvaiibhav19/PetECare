import React from "react";
import "./Card.css";

const Card = (props) => {
  const { image } = props;
  console.log(props);
  return (
    <div className="col-md-3">
      <div
        id="card-container"
        className="card text-center"
        style={{
          backgroudColor: "#fdfdfd",
          height: "180px",
          margin: "30px",
        }}
      >
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;
