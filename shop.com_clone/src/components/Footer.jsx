import "../App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  let imgArr = [
    "https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png",
    "https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png",
    "https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png",
    "https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png",
    "https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png",
    "https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png",
    "https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png",
    "https://seal-greensboro.bbb.org/seals/blue-seal-150-110-bbb-4002355.png",
  ];
  return (
    <>
      <div id="footerupper">
        <p>Link To This Page & Tell All Your Friends!</p>
        <div id="AboutUs">
          <ul>
            <li>About Us</li>
            <li>Help</li>
            <li>Accessibility Statement Services Connect</li>
            <li>Contact Us</li>
            <li>Partner With Us</li>
            <li>Country/Region</li>
            <li>Own Your Own SHOP Site</li>
          </ul>
          <div id="reachUs">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faPinterest} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
      <div id="footerMiddle">
        <p id="copyright">
          © 1997-2023 Market America, Inc. or its affiliates. All other
          designated trademarks, copyrights, and brands are the property of
          their respective owners.
        </p>
        <ul id="footerLowerList">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Advertising Disclosure</li>
          <li>Return Policy</li>
          <li>Shipping Information</li>
          <li>Do Not Sell My Information</li>
        </ul>
      </div>
      <div id="images">
        <ul id="imgList">
          {imgArr.map((img, i) => {
            return (
              <li>
                <img src={img} alt={i} />
              </li>
            );
          })}
        </ul>
      </div>
      <img
        style={{ display: "block", margin: "auto" }}
        src="https://seal.digicert.com/seals/popup/images/smart-seal.png"
        alt="last"
      />
    </>
  );
}
