import { Link } from "react-router-dom";

export default function CartPage() {
  let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartarr);
  return (
    <div style={{ margin: "20px", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Cart Page</h1>
      <div style={{ display: "flex" }}>
        <div>
          {cartarr.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>Cart is Empty</h1>
          ) : (
            cartarr.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    padding: "20px",
                    margin: "20px",
                    border: "1px solid black",
                    width: "1000px",
                  }}
                >
                  <img
                    style={{ width: "550px", height: "300px" }}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div
                    style={{
                      width: "400px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <h1>{item.title}</h1>
                    <h2>Price :- ${item.price}</h2>
                    <button
                      onClick={() => {
                        let arr = JSON.parse(localStorage.getItem("cart"));
                        let newarr = arr.filter((item1) => {
                          return item1.id !== item.id;
                        });

                        localStorage.setItem("cart", JSON.stringify(newarr));
                        // alert("Item Removed From Cart");
                        window.location.reload();
                      }}
                      style={{
                        display: "block",
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "30px",
                        backgroundColor: "#202340",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div>
          <div style={{ margin: "20px" }}>
            {cartarr.length === 0 ? (
              ""
            ) : (
              <div>
                <h1>
                  Total Price :- $
                  {cartarr.reduce((acc, curr) => {
                    return acc + curr.price;
                  }, 0)}
                </h1>
                <Link to={"/Checkout"} style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "block",
                      margin: "auto",
                      padding: "20px",
                      borderRadius: "30px",
                      backgroundColor: "#202340",
                      color: "white",
                      fontSize: "20px",
                      marginTop: "40px",
                    }}
                  >
                    Place Your Order
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
