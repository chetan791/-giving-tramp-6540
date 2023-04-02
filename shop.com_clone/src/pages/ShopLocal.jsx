// import { urlToRequest } from "loader-utils";

export default function ShopLocal() {
  const arr = [
    "	https://img.shop.com/Image/resources/images/chicago@2x.jpg",
    "https://img.shop.com/Image/resources/images/los-angeles@2x.jpg",
    "https://img.shop.com/Image/resources/images/new-york@2x.jpg",
    "https://img.shop.com/Image/resources/images/san-diego@2x.jpg",
    "https://img.shop.com/Image/resources/images/san-francisco@2x.jpg",
    "https://img.shop.com/Image/resources/images/seattle@2x.jpg",
  ];
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          height: "50px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `Url("https://img.shop.com/Image/ShopLocal/ShopLocalLogo.svg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "180px",
          }}
        ></div>
        <div
          className="sideparentdiv"
          style={{
            display: "flex",
          }}
        >
          <div
            className="1stdiv"
            style={{
              width: "175px",
              alignItem: "center",
              display: "flex",
              justifyContent: "start",
              padding: "5px",
            }}
          >
            <img
              src="https://img.shop.com/Image/ShopLocal/QuestionIcon.svg"
              alt=""
              style={{
                width: "27px",
                marginRight: "4px",
              }}
            ></img>
            <p
              style={{
                width: "100%",
                fontSize: "18px",
                margin: "auto",
                fontWeight: "bold",
              }}
            >
              How this works
            </p>
          </div>
          <div
            className="2nddiv"
            style={{
              width: "175px",
              alignItem: "center",
              display: "flex",
              justifyContent: "start",
              marginLeft: "10px",
              padding: "5px",
            }}
          >
            <img
              src="https://img.shop.com/Image/ShopLocal/LinkMyCardIcon.svg"
              alt=""
              style={{
                width: "27px",
                marginRight: "4px",
              }}
            ></img>
            <p
              style={{
                width: "100%",
                fontSize: "18px",
                margin: "auto",
                fontWeight: "bold",
              }}
            >
              Link My Card
            </p>
          </div>
          <div
            className="3rd div"
            style={{
              width: "175px",
              alignItem: "center",
              display: "flex",
              justifyContent: "start",
              marginLeft: "10px",
              padding: "5px",
            }}
          >
            <img
              src="https://img.shop.com/Image/ShopLocal/searchicon.svg"
              alt=""
              style={{
                width: "27px",
                marginRight: "4px",
              }}
            ></img>
            <p
              style={{
                width: "100%",
                fontSize: "18px",
                margin: "auto",
                fontWeight: "bold",
              }}
            >
              Search Offers
            </p>
          </div>
        </div>
      </div>

      {/* map view */}
      <div
        style={{
          marginTop: "10px",
          backgroundImage: `Url("https://img.shop.com/Image/resources/images/no-results-page@2x.jpg")`,
          bacgroundSize: "contain",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
        }}
      ></div>
      {/* mapsearch */}
      <div
        className="mainbody"
        style={{
          height: "90px",
          backgroundColor: "#202340",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="whitepart"
          style={{
            width: "60%",
            height: "60%",
            backgroundColor: "#ffffff",
            border: "5px solid #344d6d",
            borderRadius: "8px",
          }}
        >
          <span>Find</span>
          <input type="text" placeholder=""></input>
          <span>Near</span>
          <input type="text" placeholder=""></input>
          {/*search image and location image */}
        </div>
      </div>
      <p
        style={{
          marginTop: "40px",
        }}
      >
        Enter a Zip Code or City, State above to find local offers.
      </p>

      {/* Top Offer Location */}
      <h2
        style={{
          textAlign: "left",
          marginTop: "80px",
          marginLeft: "15px",
        }}
      >
        Top Offer Locations
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)" }}>
        {arr.map((element) => {
          return (
            <div>
              <img style={{ width: "200px" }} src={element} alt="1" />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            float: "left",
            marginLeft: "15px",
          }}
        >
          Get email updates on SHOP Local offers in
        </span>
        <input
          type="text"
          placeholder="Zip Code"
          style={{
            width: "300px",
            padding: "10px 0px 10px 6px ",
            marginLeft: "10px",
            float: "left",
          }}
        ></input>
        <input
          type="text"
          placeholder="yourname@gmail.com"
          style={{
            width: "300px",
            padding: "10px 0px 10px 6px ",
            marginLeft: "14px",
            float: "left",
          }}
        ></input>
        <button
          style={{
            marginLeft: "10px",
            padding: "10px",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "#414467",
            color: "white",
            fontSize: "16px",
          }}
        >
          Sign Up
        </button>
      </div>
      <div
        style={{
          float: "left",
          marginTop: "20px",
          marginLeft: "15px",
        }}
      >
        <input type="checkbox"></input>
        <span>
          Yes, send me more great deals from <i>SHOP.COM</i>
        </span>
      </div>
    </div>
  );
}
