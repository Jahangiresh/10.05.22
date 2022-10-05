import React from "react";
import "./auth.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Logout from "../components/Logout";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //handle inp
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("invalid credentials");
      } else {
        window.alert("logged in succesfuly");
        window.location.reload();

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <div className="auth__content">
        <div className="auth__content__main">
          <div className="auth__content__main__header">
            <div className="auth__content__main__header__image">
              <img
                src="https://static.thenounproject.com/png/2087664-200.png"
                alt="logo"
              />
            </div>
            <h1>Log in</h1>
            <Logout />
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form
                className="formik__class"
                onSubmit={handleSubmit}
                method="POST"
              >
                <span>email</span>
                <Field
                  className="field__inp"
                  type="username"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="username" component="div" />
                <span>password</span>
                <Field
                  className="field__inp"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
                <button
                  className="register__btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
