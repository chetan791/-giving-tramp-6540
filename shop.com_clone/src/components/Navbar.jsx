import "../App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCircleUser,
  faRotateRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  let departmentArr = [
    "All Departments",
    "Auto",
    "baby",
    "beauty",
    "books",
    "business",
    "camera",
    "clothes",
    "computer",
    "collectibles",
    "craft",
    "electronic",
    "foods and drinks",
    "garden",
    "health & nutrition",
    "homes",
    "store",
    "jewellery",
    "movies",
    "music",
    "party supplies",
    "pet supplies",
    "poster",
    "software",
    "sports & shoes",
    "sports and fitness",
    "tools",
    "travel",
    "video game",
  ];

  return (
    <nav id="navbar">
      <h4 id="NavUpper">
        Don't wait - elevate your wellness and support your weight loss goals
        with the TLS Jump Start Kit today! <u>Order now</u>
      </h4>
      <div id="nav-center">
        <Link to={"/"}>
          {" "}
          <img id="logo" src={require("../images/logo.png")} alt="" />
        </Link>
        <div id="searchbar">
          <select name="All Departments" id="">
            {departmentArr.map((department) => {
              return <option value={department}>{department}</option>;
            })}
          </select>
          <input type="text" placeholder="Search COZMO.STORE..." />
          <p style={{ backgroundColor: "#202340" }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
            />
          </p>
        </div>
        <img id="logo" src={require("../images/collection.png")} alt="" />
      </div>
      <div id="bottomPart">
        <p className="pagelist">
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: "#202340",
              fontSize: "x-large",
              marginRight: "10px",
            }}
          />
          Categories
        </p>

        <ul id="NavbarList">
          <Link
            to={"/ExclusiveBrandpage"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">Exclusive Brands</li>
          </Link>
          <Link
            to={"/Stores"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">Stores</li>
          </Link>
          <Link
            to={"/Deals"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">Deals</li>
          </Link>
          <Link
            to={"/ShopTravel"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">SHOP Travel</li>
          </Link>
          <Link
            to={"/ShopBuddy"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">ShopBuddy</li>
          </Link>
          <Link
            to={"/ShopLocal"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className="pagelist">Shop Local</li>
          </Link>
        </ul>
        <div id="userThings">
          <Link
            to={"/Login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="pagelist">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ color: "#142d57" }}
              />
              Login
            </p>
          </Link>
          <p className="pagelist">
            <FontAwesomeIcon
              icon={faRotateRight}
              flip="horizontal"
              style={{ color: "#331f51" }}
            />
            Orders
          </p>
          <Link to={"/Cart"} style={{ textDecoration: "none", color: "black" }}>
            <p className="pagelist">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#26334b" }}
              />
              Cart
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
