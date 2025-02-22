import React, { useState } from "react";
import "../../styles/DonateBanner.css";
import donateImg from "../../assets/pictures/donate-banner-image.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const DonateBanner = () => {
  const [isLoggedIn] = useState(Cookies.get("token"));

  var nav = useNavigate();
  const handleDonate = () => {
    if (!isLoggedIn) {
      toast.error("Please log in before donating");
      nav("/user/login");
    } else {
      nav("/donateus");
    }
  };
  return (
    <div id="donate-banner" className="d-flex justify-content-evenly">
      <div
        id="donateCol1"
        className="d-flex flex-column justify-content-center align-items-start me-5"
      >
        <h1 className="mb-4">You can help us too !!</h1>
        <p className="donate-details">
          Happiness increases when you share your love.
        </p>
        <p>So why not help millions by sharing your love ?</p>
        <button
          type="button"
          className="mt-4 button_animation btn"
          onClick={() => {
            handleDonate();
          }}
        >
          Share your love ❤️
        </button>
      </div>
      <div id="donateCol2">
        <img src={donateImg} alt="woman sitting in a chair with a doctor and a woman in a chair" className="donateImg" />
      </div>
    </div>
  );
};

export default DonateBanner;
