import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import styles from "./Signup.module.css";
import signupImage from "../assets/signup.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });

    if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Must be a Gmail address";
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with a number and special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className={styles.container}>
      <div className="row justify-content-center w-100 align-items-center">
        <div className="col-12 col-md-6 fade-in order-md-1 order-2 text-center">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className={`img-fluid ${styles.image}`}
            style={{ maxWidth: "85%" }}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-5 fade-in order-md-2 order-1">
          <div className={styles.formContainer}>
            <h2 className={styles.title}>Join Wealth Wise</h2>

            <Form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md-6">
                  <Form.Group controlId="firstName">
                    <Form.Label className={styles.label}>First Name</Form.Label>
                    <Form.Control
                      className={styles.input}
                      placeholder="First Name"
                      style={{
                        border: errors.firstName && "2px solid #ff4444",
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    {errors.firstName && (
                      <span className={styles.error}>{errors.firstName}</span>
                    )}
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group controlId="lastName">
                    <Form.Label className={styles.label}>Last Name</Form.Label>
                    <Form.Control
                      className={styles.input}
                      placeholder="Last Name"
                      style={{ border: errors.lastName && "2px solid #ff4444" }}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    {errors.lastName && (
                      <span className={styles.error}>{errors.lastName}</span>
                    )}
                  </Form.Group>
                </div>
              </div>

              <Form.Group controlId="email" className="mb-2">
                <Form.Label className={styles.label}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  className={styles.input}
                  placeholder="john.doe@gmail.com"
                  style={{ border: errors.email && "2px solid #ff4444" }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </Form.Group>

              <Form.Group controlId="password" className="mb-2">
                <Form.Label className={styles.label}>Password</Form.Label>
                <Form.Control
                  type="password"
                  className={styles.input}
                  placeholder="••••••••"
                  style={{ border: errors.password && "2px solid #ff4444" }}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && (
                  <span className={styles.error}>{errors.password}</span>
                )}
              </Form.Group>

              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label className={styles.label}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  className={styles.input}
                  placeholder="••••••••"
                  style={{
                    border: errors.confirmPassword && "2px solid #ff4444",
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword}</span>
                )}
              </Form.Group>

              <Button type="submit" className={styles.button}>
                Sign Up
              </Button>

              <div className="d-flex align-items-center my-3">
                <div className="flex-grow-1 border-top border-white"></div>
                <span
                  className="mx-2 text-white"
                  style={{ fontSize: "0.8rem" }}
                >
                  or
                </span>
                <div className="flex-grow-1 border-top border-white"></div>
              </div>

              <Button variant="outline-light" className={styles.googleButton}>
                <FaGoogle style={{ fontSize: "1rem" }} />
                <span>Continue with Google</span>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
