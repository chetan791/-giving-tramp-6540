import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Deals() {
  const [data, setData] = useState([]);
  let url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Deals</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {data.map((item) => {
          return (
            <Link to={`/ProductDetailPage/${item.id}`} key={item.id}>
              <div
                style={{
                  width: "400px",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  marginLeft: "30px",
                }}
              >
                <img
                  style={{ height: "300px", width: "400px" }}
                  src={item.thumbnail}
                  alt={item.name}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                <p style={{ color: "#0098b8" }}>{item.rating}/5</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
