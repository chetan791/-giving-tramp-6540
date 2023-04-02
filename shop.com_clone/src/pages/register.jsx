import React, { useReducer, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email": {
      return { ...state, email: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default function RegisterPage() {
  const history = useNavigate();
  const { addUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <div
        style={{
          backgroundColor: "#202340",
          color: "white",
          width: "600px",
          display: "block",
          margin: "auto",
          marginTop: "50px",
          marginBottom: "50px",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Register Page</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("form submitted");
            if (password !== confirmPassword) {
              alert("passwords did't match");
            } else {
              addUser(state);
              dispatch({ type: "reset" });
              setPassword("");
              setConfirmPassword("");
              alert("Registration  Successful");
              history("/Login");
            }
            console.log(state);
          }}
        >
          <input
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "username", payload: e.target.value })
            }
            required
            style={{
              display: "block",
              margin: "auto",
              padding: "15px",
              width: "300px",
              marginTop: "20px",
              borderRadius: "10px",
              fontSize: "large",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            type="text"
            placeholder="Enter UserName"
          />
          <input
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
            style={{
              display: "block",
              margin: "auto",
              padding: "15px",
              width: "300px",
              marginTop: "40px",
              borderRadius: "10px",
              fontSize: "large",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            type="text"
            placeholder="Enter Email"
          />
          <input
            value={state.password}
            onChange={(e) => {
              dispatch({ type: "password", payload: e.target.value });
              setPassword(e.target.value);
            }}
            required
            style={{
              display: "block",
              margin: "auto",
              padding: "15px",
              width: "300px",
              marginTop: "40px",
              borderRadius: "10px",
              fontSize: "large",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            type="text"
            placeholder="Enter Password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPassword(e.target.value);
            }}
            required
            style={{
              display: "block",
              margin: "auto",
              padding: "15px",
              width: "300px",
              marginTop: "40px",
              borderRadius: "10px",
              fontSize: "large",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
            type="text"
            placeholder="Re-Enter password"
          />

          <input
            style={{
              display: "Block",
              margin: "auto",
              marginTop: "40px",
              padding: "15px",
              borderRadius: "30px",
              fontSize: "large",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
            type="submit"
            value="Register"
          />
          <p style={{ textAlign: "center", margin: "40px" }}>
            <u> Forgot Password ?</u>
          </p>
        </form>
      </div>
    </div>
  );
}
