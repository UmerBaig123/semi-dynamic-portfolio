import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AuthPages.css"; // <-- Import external CSS
import { login } from "../api/Auth";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { addToken } = useAuth();
  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await login(values);
      console.log("Response:", response);
      console.log("JWT:", response.token);
      addToken(response.token, values.username);
      navigate("/admin"); // Redirect to home page
      // Save token, redirect, etc.
    } catch (err) {
      console.error("Login error:", err);
      setErrors({ server: err.response?.data?.error || "Login failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container center">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
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
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <div className="login-footer">
                <p className="auth-redirect-text">
                  Don't have an account?{" "}
                  <a href="#/register" className="login-link">
                    Register
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

export default LoginPage;
