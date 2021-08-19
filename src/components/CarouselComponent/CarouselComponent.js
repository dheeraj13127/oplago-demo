import React, { useState } from "react";
import "../css/CarouselComponent.css";
import Navbar from "../Navbar/Navbar";
import { GoPrimitiveDot } from "react-icons/go";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Card1 from "../Card1/Card1";
import Card2 from "../Card2/Card2";
function CarouselComponent() {
  const [auth, setAuth] = useState(1);
  const onPreviousClick = () => {
    if (auth === 2) {
      setAuth(1);
    } else {
      setAuth(1);
    }
  };
  const onNextClick = () => {
    if (auth === 1) {
      setAuth(2);
    } else {
      setAuth(2);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container carouselContainer p-3">
        <div className="row p-3">
          <div className="col-12 col-lg-6 col-md-6 carouselRow p-2">
            <div className="text-start goLiveContainer">
              <button className="btn goLiveBtn">
                <GoPrimitiveDot className="goLiveIcon" />
                &nbsp;LIVE
              </button>
              <p className="text-dark goLiveText">Upcoming Live Coaching</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 carouselRow p-2">
            <div className="arrowContainer">
              <button
                className="btn arrowIconBtn "
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <RiArrowLeftSLine className="arrowIcon " />
              </button>
              <button
                className="btn arrowIconBtn  "
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <RiArrowRightSLine className="arrowIcon " />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Card1 />
              </div>
              <div className="carousel-item">
                <Card2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
