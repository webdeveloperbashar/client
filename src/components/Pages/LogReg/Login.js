import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context } from "../../App.js";
import { handleGoogleSignIn, initializeApp } from "../../Firebase/Firebase.js";
import Validate from "../Validation/Validate";
import classes from "./Login.module.css";

initializeApp(); // firebase initialize;
handleGoogleSignIn();
export default function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSinged: false,
    email: "",
    password: "",
    successMsg: "",
    errorMsg: "",
  });
  const [errors, setErrors] = useState({});
  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedIn, setLoggedIn] = useContext(Context);
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        setLoggedIn(result);
        history.replace(from);
      })
      .catch((error) => alert(error));
  }; // Sign in with google account
  const handleChange = (e) => {
    const userIn = { ...user };
    userIn[e.target.name] = e.target.value;
    setUser(userIn);
  };
  const handleSumbmit = (e) => {
    e.preventDefault();
    setErrors(Validate(user));
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const userDetails = { ...user };
          userDetails.successMsg = "Sign In Successfully";
          userDetails.isSinged = true;
          history.replace(from);
          setUser(userDetails);
          setLoggedIn(res.user);
        })
        .catch((error) => {
          const userDetails = { ...user };
          userDetails.errorMsg = error.message;
          setUser(userDetails);
        });
    }
  }; //Sign in with email and password
  return (
    <div className={classes.loginForm}>
      <form onSubmit={handleSumbmit} className={classes.form}>
        {user.isSinged ? (
          <p className="text-success">{user.successMsg}</p>
        ) : (
          <p className="text-danger">{user.errorMsg}</p>
        )}
        <h3 className="text-center">Login</h3>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={user.email}
          className="form-control input"
          placeholder="Enter Your Email"
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
          className="form-control input"
          placeholder="Enter Your Password"
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}
        <span className={classes.checkbox}>
          {" "}
          <input type="checkbox" /> Remembar me
        </span>{" "}
        <span className={classes.forgetPass}>Forget Password </span>
        <br />
        <input type="submit" className={`${classes.btn} input`} value="Login" />
        <p>
          Don't Have an Account ? <Link to="/signup">Create an Account</Link>{" "}
        </p>
      </form>
      <br />
      <h6 className={classes.hr}>Or</h6>
      <Button onClick={googleSignIn} className={classes.google}>
        <span>
          <FcGoogle />
        </span>
        <span>Continue With Google</span>
      </Button>
    </div>
  );
}
