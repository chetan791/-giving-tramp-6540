import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function LoginPage() {
  const history = useNavigate();
  const { CheckUser } = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, initialState);
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
        <h1 style={{ textAlign: "center" }}>Login Page</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("form submitted");
            CheckUser(state);
            dispatch({ type: "reset" });
            history("/");
          }}
        >
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
            value="Login"
          />
          <Link
            to={"/Register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p style={{ textAlign: "center", margin: "40px" }}>
              <u> Not Registered YET !</u>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
