import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleZipChange(event) {
    setZip(event.target.value);
  }

  function handleCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  function handleExpDateChange(event) {
    setExpDate(event.target.value);
  }

  function handleCvvChange(event) {
    setCvv(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle submission logic here
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Checkout</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",

          gap: "10px",
          padding: "50px",
          backgroundColor: "#202340",
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          borderRadius: "10px",
          rowGap: "40px",
          columnGap: "60px",
          color: "white",
          fontSize: "large",
        }}
      >
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Name:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Email:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Address:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          City:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Zip Code:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={zip}
            onChange={handleZipChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Card Number:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Expiration Date:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={expDate}
            onChange={handleExpDateChange}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          CVV:
          <input
            style={{
              marginLeft: "40px",
              padding: "10px",
              fontSize: "large",
              border: "1px solid black",
            }}
            type="text"
            value={cvv}
            onChange={handleCvvChange}
            required
          />
        </label>
        <p>--</p>
        <Link to={"/thankyou"}>
          <button
            style={{
              marginLeft: "80%",
              fontSize: "large",
              padding: "10px",
              borderRadius: "30px",
            }}
            type="submit"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Checkout;
