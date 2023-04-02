import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <div
      style={{
        display: "block",
        margin: "200px",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1>Thank you for your purchase!</h1>
      <h2>Check your email for more details</h2>
      <h2>Your Order Id :- A7125494</h2>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h2>Click Here to Return to Homepage</h2>
      </Link>
    </div>
  );
}
