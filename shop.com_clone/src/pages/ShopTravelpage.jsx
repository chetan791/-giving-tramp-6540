export default function Travel() {
  return (
    <div
      style={{
        backgroundImage: `url('https://img.shop.com/Image/resources/images/travel_bg_desktop.jpg?id=4710854')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "200vh",
      }}
    >
      <div
        class="container"
        style={{
          display: "flex",
          width: "90%",
          height: "875px",
          margin: "auto",
          alignItem: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `Url('https://img.shop.com/Image/featuredhotdeal/CrystalTravel-Med-Mar231680022369543.gif?id=5271891')`,
            backgroundSize: "cover",
            width: "225px",
            height: "187px",
            marginTop: "220px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "white",
            width: "550px",
            height: "741.3px",
            marginTop: "50px",
            padding: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "1.75rem",
              color: "#202340",
            }}
          >
            SHOP &#183; TRAVEL
          </h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "68.3px",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "58px",
                alignItem: "center",
                borderStyle: "solid",
                borderWidth: "1",
                borderColor: "#007e97",
                borderRadius: "8px",
                padding: "3px",
                marginLeft: "28px ",
              }}
            >
              <img
                alt=""
                role="img"
                src="https://img.shop.com/Image/resources/images/travel_hotel_icon.svg"
                style={{
                  width: "25px",
                }}
              ></img>
              <p
                style={{
                  margin: "0px",
                }}
              >
                Hotel
              </p>
            </div>
            <div
              style={{
                width: "100px",
                height: "58px",
                alignItem: "center",
                borderStyle: "solid",
                borderWidth: "1",
                borderColor: "#007e97",
                borderRadius: "8px",
                padding: "3px",
                marginRight: "28px ",
              }}
            >
              <img
                alt=""
                role="img"
                src="https://img.shop.com/Image/resources/images/travel_plane_icon.svg"
                style={{
                  width: "25px",
                }}
              ></img>
              <p
                style={{
                  margin: "0px",
                }}
              >
                Hotel
              </p>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              marginTop: "20px",
            }}
          >
            Pick a Travel Partner:
          </p>

          <select
            style={{
              width: "480px",
              borderStyle: "solid",
              borderWidth: "1px",
              padding: "10px 0px 10px 0px",
              marginBottom: "16px",
              display: "block",
              margin: "auto",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            <option value="#">Booking.com up to 2.0% Cashback</option>
            <option value="#">Booking.com up to 2.0% Cashback</option>
            <option value="#">Booking.com up to 2.0% Cashback</option>
            <option value="#">Booking.com up to 2.0% Cashback</option>
          </select>
          <div
            style={{
              margin: "auto",
              marginBottom: "16px",
              width: "480px",
              boxSizing: "borderBox",
              display: "flex",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "#D4810C",
                padding: "6px 8px 4px 8px",
              }}
            >
              <img
                style={{
                  padding: "0px",
                  width: "18px",
                  height: "18px",
                }}
                src="https://img.shop.com/Image/resources/images/icon-travel-location.svg"
              ></img>
            </div>
            <div>
              <input
                style={{
                  width: "440px",
                  height: "32px",
                  border: "1px solid black",
                }}
                type="text"
                placeholder="City or Airport"
              ></input>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "auto",
              marginBottom: "16px",
              width: "480px",
              boxSizing: "borderBox",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#D4810C",
                  padding: "6px 8px 4px 8px",
                }}
              >
                <img
                  style={{
                    padding: "0px",
                    width: "18px",
                    height: "18px",
                  }}
                  src="https://img.shop.com/Image/resources/images/icon-travel-calendar.svg"
                ></img>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Check-in"
                  onfocus="(this.type='date')"
                  style={{
                    height: "32px",
                    border: "1px solid black",
                  }}
                ></input>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#D4810C",
                  padding: "6px 8px 4px 8px",
                }}
              >
                <img
                  style={{
                    padding: "0px",
                    width: "18px",
                    height: "18px",
                  }}
                  src="https://img.shop.com/Image/resources/images/icon-travel-calendar.svg"
                ></img>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Check-Out"
                  onfocus="(this.type='date')"
                  style={{
                    height: "32px",
                    border: "1px solid black",
                  }}
                ></input>
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "left",
              margin: "auto",
              marginBottom: "15px",
              width: "88%",
              fontSize: "14px",
            }}
          >
            Number of Rooms: 1
          </p>
          <div
            style={{
              display: "flex",
              margin: "auto",
              marginBottom: "16px",
              width: "480px",
              boxSizing: "borderBox",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "#D4810C",
                padding: "8px 10px 8px 10px",
              }}
            >
              <img
                src="https://img.shop.com/Image/resources/images/plus_icon.svg"
                style={{
                  padding: "0px",
                  width: "22px",
                  height: "22px",
                }}
              ></img>
            </div>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "#D4810C",
                padding: "8px 10px 8px 10px",
              }}
            >
              <img
                src="https://img.shop.com/Image/resources/images/minus_icon.svg"
                style={{
                  padding: "0px",
                  width: "22px",
                  height: "22px",
                }}
              ></img>
            </div>
          </div>
          <p
            style={{
              textAlign: "left",
              margin: "auto",
              marginBottom: "15px",
              width: "88%",
              fontSize: "14px",
            }}
          >
            Room 1
          </p>
          <div
            style={{
              display: "flex",
              margin: "auto",
              marginBottom: "16px",
              width: "480px",
              boxSizing: "borderBox",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#D4810C",
                  padding: "6px 8px 4px 8px",
                }}
              >
                <img
                  style={{
                    padding: "0px",
                    width: "18px",
                    height: "18px",
                  }}
                  src="https://img.shop.com/Image/resources/images/icon-travel-human.svg"
                ></img>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Numbers of Adults"
                  onfocus="(this.type='date')"
                  style={{
                    height: "32px",
                    border: "1px solid black",
                  }}
                ></input>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "#D4810C",
                  padding: "6px 8px 4px 8px",
                }}
              >
                <img
                  style={{
                    padding: "0px",
                    width: "18px",
                    height: "18px",
                  }}
                  src="https://img.shop.com/Image/resources/images/humanoid_child.svg"
                ></img>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Number of Children"
                  onfocus="(this.type='date')"
                  style={{
                    height: "32px",
                    border: "1px solid black",
                  }}
                ></input>
              </div>
            </div>
          </div>

          <button
            style={{
              width: "332px",
              height: "41px",
              padding: "4px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "20px",
              display: "block",
              margin: "auto",
              backgroundColor: "#D4810C",
            }}
          >
            Search Booking.com
          </button>
          <h5
            style={{
              color: "#b85c00",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Earn $5 Cashback in Free Cashback on your first order*
          </h5>
          <p
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            I do not want cashBack proceed to Booking . com
          </p>
          <div
            style={{
              width: "500px",
              margin: "auto",
            }}
          >
            <p
              style={{
                width: "100%",
                fontSize: "8px",
                lineHeight: "15px",
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              {" "}
              *$25 min purchase necessary. Valid First Time Customers Only. You
              will automatically be enrolled in the Cashback program and agree
              to our promotional{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textAlign: "center",
                }}
              >
                Terms and Conditions
              </span>{" "}
              , and SHOP.COM{" "}
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                Terms of Use
              </span>
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `Url('https://img.shop.com/Image/featuredhotdeal/CrystalTravel-Med-Mar231680022369543.gif?id=5271891')`,
            backgroundSize: "cover",
            width: "225px",
            height: "187px",
            marginTop: "220px",
          }}
        ></div>
      </div>
    </div>
  );
}
