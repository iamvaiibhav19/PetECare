import React, { useEffect, useState } from "react";
import "./Services.scss";
import axios from "axios";
import Card from "./Card";
const Services = () => {
  const [services, setServices] = useState([]);
  const fetchServices = () => {
    axios
      .get("https://petecare.herokuapp.com/api/v1/services/getAllServices")
      .then((data) => {
        console.log(data.data.data.services);
        setServices(data.data.data.services);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fourServices = services.slice(0, 4);
  const lastthreeServices = services.slice(4, 7);

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        width: "100%",
      }}
    >
      <div className="row">
        {fourServices &&
          fourServices.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              minDescription={service.minDescription}
              image={service.image}
              description={service.description}
            />
          ))}
      </div>
      <div
        className="row"
        style={{
          marginTop: "20px",
          marginBottom: "50px",
          position: "relative",
          left: "150px",

          // margin: "auto",
        }}
      >
        {lastthreeServices &&
          lastthreeServices.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              minDescription={service.minDescription}
              image={service.image}
              description={service.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;
