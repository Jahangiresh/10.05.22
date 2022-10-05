import React from "react";
import "./auth.scss";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";
const Auth = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    location: "",
  });

  //handle inp
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  //handle submit
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname, username, email, password, location } = user;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          username,
          email,
          password,
          location,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("already used details");
      } else {
        window.alert("registered succesfully");
        history.push("/login");
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
            <h1>Sign in</h1>
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
                onSubmit={handleSubmit}
                method="POST"
                className="formik__class"
              >
                <span>name</span>
                <Field
                  className="field__inp"
                  type="name"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
                <ErrorMessage name="name" component="div" />
                <span>surname</span>

                <Field
                  className="field__inp"
                  type="surname"
                  name="surname"
                  value={user.surname}
                  onChange={handleInput}
                />
                <ErrorMessage name="surname" component="div" />
                <span>username</span>

                <Field
                  className="field__inp"
                  type="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
                <ErrorMessage name="username" component="div" />
                <span>email</span>

                <Field
                  className="field__inp"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <ErrorMessage name="email" component="div" />
                <span>password</span>

                <Field
                  className="field__inp"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <ErrorMessage name="password" component="div" />
                <span>full adress</span>

                <Field
                  className="field__inp"
                  type="text"
                  name="location"
                  value={user.location}
                  onChange={handleInput}
                  placeholder="exp: Baku, Khatai district, Admiral Nakhimov st23/1 "
                />
                <ErrorMessage name="location" component="div" />

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

export default Auth;
