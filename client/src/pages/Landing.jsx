import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} className="logo" alt="topjobs" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Find your <span>Dream</span> Job
          </h1>
          <p>
            We provide a platform where you can find your dream job. We have
            thousands of job listings from different companies.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo User
          </Link>
        </div>
        <img src={main} className="img main-img" alt="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
