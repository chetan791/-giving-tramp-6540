import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../App.css";

export default function ProductDetailsPage() {
  let arr = JSON.parse(localStorage.getItem("cart")) || [];
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(id);

  async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="product-details-page"
      style={{
        padding: "50px",
        display: "flex",
        gap: "30px",
        // border: "1px solid black",
        margin: "30px",
      }}
    >
      <img
        style={{ width: "1000px" }}
        src={product.thumbnail}
        alt={product.title}
      />
      <div
        style={{
          textAlign: "center",
          width: "500px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          // border: "1px solid black",
        }}
      >
        {" "}
        <h1>{product.title}</h1>
        <h2>{product.brand}</h2>
        <h3>Description :- {product.description}</h3>
        <h1>Price :- ${product.price}</h1>
        <button
          style={{
            display: "block",
            margin: "auto",
            padding: "20px",
            borderRadius: "30px",
            backgroundColor: "#202340",
            color: "white",
            fontSize: "20px",
          }}
          onClick={() => {
            arr.push(product);
            localStorage.setItem("cart", JSON.stringify(arr));
            alert("Item Added To Cart");
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
