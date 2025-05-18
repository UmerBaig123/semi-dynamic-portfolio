import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AuthPages.css"; // <-- Import external CSS
import { useAuth } from "../context/AuthContext";
import { register } from "../api/Auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const { addToken } = useAuth();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await register(values);
      if (response.status !== 200) {
        setErrors({ server: response.data.error || "Registration failed" });
      } else {
        alert("Registration successful!");
        console.log("JWT:", response.data.token);
        addToken(response.token, values.username);
        navigate("/admin"); // Redirect to home page
        // Save token, redirect, etc.
      }
    } catch (err) {
      console.error("Registration error:", err);
      setErrors({ server: err.response?.data?.error || "Registration failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container center">
      <div className="login-card">
        <h2 className="login-title">Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="login-form">
              {errors.server && (
                <div className="login-error">{errors.server}</div>
              )}

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-input" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="login-error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <Field name="fullName" type="text" className="form-input" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="login-error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-input" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="login-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-input" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="login-error"
                />
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
              <div className="login-footer">
                <p className="auth-redirect-text">
                  Already have an account?{" "}
                  <a href="#/login" className="login-link">
                    Login
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
