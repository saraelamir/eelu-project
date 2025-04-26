import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Welcome.module.css";
import welcomeImage from "../assets/welcome.png";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={`container-fluid ${styles.contentContainer}`}>
        <div className="row justify-content-center w-100 align-items-center">
          <div className="col-12 col-md-6 col-lg-5 text-left fade-in order-md-1 order-2 ps-0">
            <h1 className={styles.heading}>Welcome Mohammed,</h1>
            <p className={styles.subtitle}>
              Your Journey To Smarter Spending And Bigger
              <br />
              Savings Starts Here
            </p>
            <Button as={Link} to="/home" className={styles.button}>
              Get Started
            </Button>
          </div>

          <div className="col-12 col-md-6 col-lg-5 fade-in order-md-2 order-1 mb-4 mb-md-0">
            <img
              src={welcomeImage}
              alt="Financial Planning"
              className={`img-fluid ${styles.image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
