import React from "react";
import CountUp from "react-countup";
import Card from "./Card";

const Gallery = () => {
  const galleryImages = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLP1chgavLUMe3Y4RjE-eYDkXMQFX0n5YnsQ&usqp=CAU",
    },
    {
      img: "data:image/jpeg;base64,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",
    },
    {
      img: "https://khamgalvets.com/wp-content/uploads/2018/02/kvets-client-360x240.jpg",
    },
    {
      img: "https://khamgalvets.com/wp-content/uploads/2018/02/IMG_20170302_095448991-360x240.jpg",
    },
    {
      img: "https://khamgalvets.com/wp-content/uploads/2018/02/IMG_20170721_113914284_HDR-360x240.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tap785SOhS_6jazQJcJ2ha03FBbQkAPL2Q&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJngdr7wP7yDbLXP_tuesf8IgiXzRzhSLrGQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkvEbvoL50epdBdJNZN-fCVYs8XHf1ZgHXA&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYShOWbX_fIpZX4Uua9g34fA71I4jgFEEVqQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReVSzQj1Wb2HGOyqA0YkkFXY8-Fs-qUEQbA&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eATZVN5GD9WLpM3FW-YribigY2Skszm_ZQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKclnCJVe98LaLfEfHH1KRCuV3MIiW_RvMrQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKkxeWr6QyzShz12KXT2izyX2fU00fyRDgQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvbo5rtGBF--mxDrfnhZNrS3gHRvhb0VSkA&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Tny_nCaZlCRv_jhXX-qUoZqJXh-E3CwgEQ&usqp=CAU",
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        right: "20px",
      }}
    >
      <div
        className="Count"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
          justifyContent: "space-around",
          margin: "auto",
          marginTop: "50px",
          height: "100px",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "4.9rem",
              fontWeight: "bold",
            }}
          >
            <CountUp end={89} />
          </p>
          <h1
            style={{
              color: "#6C63FF",
            }}
          >
            Animals Vaccinated
          </h1>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "4.9rem",
              fontWeight: "bold",
            }}
          >
            <CountUp end={59} />
          </p>
          <h1
            style={{
              color: "#6C63FF",
            }}
          >
            Animals Cured
          </h1>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "4.9rem",
              fontWeight: "bold",
            }}
          >
            <CountUp end={42} />
          </p>
          <h1
            style={{
              color: "#6C63FF",
            }}
          >
            Animals Saved
          </h1>
        </div>
      </div>
      <div
        className="container"
        style={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <div className="row">
          {galleryImages.map((image) => (
            <Card image={image.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
