import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
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

  // Style configurations
  const labelStyle = {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "1rem",
    marginBottom: "6px",
    fontWeight: 500,
  };

  const inputStyle = {
    borderRadius: "20px",
    padding: "12px",
    border: "none",
    fontSize: "0.95rem",
  };

  const containerStyle = {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    maxWidth: "450px",
    margin: "0 auto",
    padding: "1.5rem",
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });

    // Email validation
    if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Must be a Gmail address";
    }

    // Password complexity validation
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with a number and special character";
    }

    // Confirm password match
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
    <div
      className="container-fluid vh-100 d-flex align-items-center"
      style={{ background: "var(--gradient-blue)" }}
    >
      <div className="row justify-content-center w-100 align-items-center">
        {/* Image Section - Left Side */}
        <div className="col-12 col-md-6 fade-in order-md-1 order-2 text-center">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className="img-fluid"
            style={{ maxWidth: "75%", height: "auto" }}
          />
        </div>

        {/* Form Section - Right Side */}
        <div className="col-12 col-md-6 col-lg-5 fade-in order-md-2 order-1">
          <div className="rounded-4" style={containerStyle}>
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "Inter",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Join Wealth Wise
            </h2>

            <Form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-md-6">
                  <Form.Group controlId="firstName">
                    <Form.Label style={labelStyle}>First Name</Form.Label>
                    <Form.Control
                      placeholder="First Name"
                      style={{
                        ...inputStyle,
                        border: errors.firstName ? "2px solid #ff4444" : "none",
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    {errors.firstName && (
                      <span className="text-danger">{errors.firstName}</span>
                    )}
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group controlId="lastName">
                    <Form.Label style={labelStyle}>Last Name</Form.Label>
                    <Form.Control
                      placeholder="Last Name"
                      style={{
                        ...inputStyle,
                        border: errors.lastName ? "2px solid #ff4444" : "none",
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    {errors.lastName && (
                      <span className="text-danger">{errors.lastName}</span>
                    )}
                  </Form.Group>
                </div>
              </div>

              <Form.Group controlId="email" className="mb-2">
                <Form.Label style={labelStyle}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example: john.doe@gmail.com"
                  style={{
                    ...inputStyle,
                    border: errors.email ? "2px solid #ff4444" : "none",
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </Form.Group>

              <Form.Group controlId="password" className="mb-2">
                <Form.Label style={labelStyle}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  style={{
                    ...inputStyle,
                    border: errors.password ? "2px solid #ff4444" : "none",
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </Form.Group>

              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label style={labelStyle}>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  style={{
                    ...inputStyle,
                    border: errors.confirmPassword
                      ? "2px solid #ff4444"
                      : "none",
                  }}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {errors.confirmPassword && (
                  <span className="text-danger">{errors.confirmPassword}</span>
                )}
              </Form.Group>

              <Button
                type="submit"
                className="w-100 py-2.5 mb-2"
                style={{
                  backgroundColor: "#fff",
                  color: "#0F5378",
                  borderRadius: "20px",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#e6e6e6")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
              >
                Sign Up
              </Button>

              <div className="d-flex align-items-center mb-3">
                <div className="flex-grow-1 border-top border-white"></div>
                <span
                  className="mx-2 text-white"
                  style={{ fontSize: "0.9rem" }}
                >
                  or
                </span>
                <div className="flex-grow-1 border-top border-white"></div>
              </div>

              <Button
                variant="outline-light"
                className="w-100 py-2.5 d-flex align-items-center justify-content-center"
                style={{
                  borderRadius: "20px",
                  background: "transparent",
                  border: "2px solid white",
                  gap: "8px",
                  fontSize: "0.95rem",
                }}
              >
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
