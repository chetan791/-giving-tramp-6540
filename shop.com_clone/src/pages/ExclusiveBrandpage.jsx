import React from "react";
import ImageGrid from "../components/ImageGrid";

export default function ExclusiveBrandpage() {
  let Health_and_Nutrition = [
    "https://img.shop.com/Image/Images/11module/MABrands/isotonix-us-au-gb-hk-sg-logo.svg?id=4525085",
    "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg?id=4525204",
    "https://img.shop.com/Image/Images/11module/MABrands/ultimate-aloe-usca-hk-logo.svg?id=4525214",
    "https://img.shop.com/Image/Images/11module/MABrands/advanced-level-90-us-logo.svg?id=4525086",
    "https://img.shop.com/Image/Images/11module/MABrands/bliss-new-us-logo.svg?id=4962480",
    "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg?id=4525191",
    "https://img.shop.com/Image/Images/11module/MABrands/heart-health-logo-trademark-cross.svg?id=5126269",
    "https://img.shop.com/Image/Images/11module/MABrands/mochatonix-us-logo.svg?id=4525197",
    "https://img.shop.com/Image/Images/11module/MABrands/mpc-us-logo.svg?id=4525199",
    "https://img.shop.com/Image/Images/11module/MABrands/nutriclean-us-logo.svg?id=4525200",
    "https://img.shop.com/Image/Images/11module/MABrands/vitamind-us-logo.svg?id=4525215",
    "https://img.shop.com/Image/Images/11module/MABrands/isotonix-custom-cocktail-us-logo.svg?id=4525193",
    "https://img.shop.com/Image/Images/11module/MABrands/nutri-physical-us-logo.svg?id=4525201",
    "https://img.shop.com/Image/Images/11module/MABrands/curcumin-extreme-usca-hk-sg-logo.svg?id=4525177",
    "https://img.shop.com/Image/Images/11module/MABrands/awake-us-logo.svg?id=4525089",
    "https://img.shop.com/Image/Images/11module/MABrands/opc3Chews_usa_32979_LogoTreatment_200x75.svg?id=4682844",
    "https://img.shop.com/Image/Images/11module/MABrands/Probiotics-10.svg?id=4933826",
    "https://img.shop.com/Image/Images/11module/MABrands/thymenol-logo.svg?id=5000630",
    "https://img.shop.com/Image/Images/11module/MABrands/cannabiquin-logo-tm.svg?id=5016500",
    "https://img.shop.com/Image/Images/11module/MABrands/cannabicool-logo-tm.svg?id=5016501",
    "https://img.shop.com/Image/Images/11module/MABrands/pure-collagen-logo.svg?id=5037995",
    "https://img.shop.com/Image/Images/11module/MABrands/vivoquin-logo-trademark.svg?id=5135548",
    "https://img.shop.com/Image/Images/11module/MABrands/bymygra-logo-trademark.svg?id=5138136",
    "https://img.shop.com/Image/Images/11module/MABrands/bymygra-logo-trademark.svg?id=5138136",
    "https://img.shop.com/Image/Images/11module/MABrands/neuro-focus-logo-trademark.svg?id=5174300",
    "https://img.shop.com/Image/Images/11module/MABrands/mycoadapt-logo.svg?id=5215041",
    "https://img.shop.com/Image/Images/11module/MABrands/glutaQ-logo.svg?id=5215040",
    "https://img.shop.com/Image/Images/11module/MABrands/daily-greens-logo.svg?id=5215039",
    "https://img.shop.com/Image/Images/11module/MABrands/axis-nutrition-logo-tm.svg?id=5246129",
  ];

  let Beauty = [
    "https://img.shop.com/Image/Images/11module/MABrands/motives-logo-black.svg?id=5167944",
    "https://img.shop.com/Image/Images/11module/MABrands/motives-logo-black.svg?id=5167944",
    "https://img.shop.com/Image/Images/11module/MABrands/fixx-au-tw-logo.svg?id=4525179",
    "https://img.shop.com/Image/Images/11module/MABrands/timeless-prescription-usca-mx-tw-logo.svg?id=4525211",
    "https://img.shop.com/Image/Images/11module/MABrands/clearshield-usca-logo.svg?id=4525175",
    "https://img.shop.com/Image/Images/11module/MABrands/pentaxyl-usca-au-hk-tw-sg-logo.svg?id=4525202",
    "https://img.shop.com/Image/Images/11module/MABrands/Royal_Spa_logo.svg?id=4525206",
    "https://img.shop.com/Image/Images/11module/MABrands/skintelligence-usca-mx-hk-tw-logo.svg?id=4525208",
    "https://img.shop.com/Image/Images/11module/MABrands/vitashield-usca-hk-tw-logo.svg?id=4525216",
    "https://img.shop.com/Image/Images/11module/MABrands/cell-labs-usca-au-gb-es-mx-sg-logo.svg?id=4525174",
    "https://img.shop.com/Image/Images/11module/MABrands/ldv-hommes%C2%AE-logo-200x75.svg?id=4920283",
  ];

  let Jewelry = [
    "https://img.shop.com/Image/Images/11module/MABrands/layered-logo.svg?id=5032927",
  ];

  let Home = [
    "https://img.shop.com/Image/Images/11module/MABrands/global-care-us-logo.svg?id=4525190",
    "https://img.shop.com/Image/Images/11module/MABrands/pet-health-us.svg?id=5269771",
    "https://img.shop.com/Image/Images/11module/MABrands/pure-H2O-usca-hk-tw-logo.svg?id=4525205",
    "https://img.shop.com/Image/Images/11module/MABrands/snap-usca-sg-mys-logo.svg?id=4525209",
    "https://img.shop.com/Image/Images/11module/MABrands/shopdotcom-us-digital-gift-card.svg?id=4525207",
  ];
  let Baby = [
    "https://img.shop.com/Image/Images/11module/MABrands/dna-miracles-us-ca-au-hk-sg-tw-mrktng-logo-new.svg?id=4525178",
  ];

  let Weight_Management = [
    "https://img.shop.com/Image/Images/11module/MABrands/dna-miracles-us-ca-au-hk-sg-tw-mrktng-logo-new.svg?id=4525178",
  ];

  let Automotive = [
    "https://img.shop.com/Image/Images/11module/MABrands/autoworks-usca-tw-logo.svg?id=4525087",
    "https://img.shop.com/Image/Images/11module/MABrands/friction-free-3000-usca-tw-logo.svg?id=4525189",
  ];

  let Electronics = [
    "https://img.shop.com/Image/Images/11module/MABrands/stealth-radar-shield-usca-tw-sg-mys-logo.svg?id=4525210",
  ];
  return (
    <div style={{ padding: "30px" }}>
      <h2>Our Brands</h2>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f7f7f7",
          padding: "5px",
          marginTop: "10px",
          gap: "20px",
        }}
      >
        <img
          style={{ width: "40%" }}
          src="https://img.shop.com/Image/Images/11module/MABrands/shop-digital-catalog-share-banner.jpg"
          alt="1"
        />
        <div>
          <span style={{ ":hover": { backgroundColor: "#09a79d" } }}>
            <u>View in Spanish</u>
          </span>
          <span
            style={{
              ":hover": { backgroundColor: "#09a79d" },
              marginLeft: "10px",
            }}
          >
            <u>View in Chinese</u>
          </span>
          <p>
            {" "}
            <b>Share the MA digital catalog with a friend.</b>
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              //   border: "1px solid black",
              width: "900px",
            }}
          >
            <input
              style={{
                padding: "20px",
                width: "90%",
                border: "1px solid black",
              }}
              type="text"
              placeholder="Enter Email address.."
            />

            <select
              name="country"
              id="country"
              style={{
                padding: "20px",
                width: "60%",
                border: "1px solid black",
              }}
            >
              <option value="Select_Language">Select Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Chinese">Chinese</option>
            </select>
            <input
              type="submit"
              value={"share"}
              style={{
                backgroundColor: "#545871",
                padding: "20px",
                paddingRight: "40px",
                paddingLeft: "40px",
                color: "white",
                borderRadius: "30px",
              }}
            />
          </div>
        </div>
      </div>
      {/* brands----------------------------------------------------- */}
      <h1 style={{ marginTop: "20px" }}> Health & Nutrition</h1>
      <ImageGrid data={Health_and_Nutrition} />

      <h1 style={{ marginTop: "20px" }}>Beauty</h1>
      <ImageGrid data={Beauty} />

      <h1 style={{ marginTop: "20px" }}>Jewelry</h1>
      <ImageGrid data={Jewelry} />

      <h1 style={{ marginTop: "20px" }}>Home</h1>
      <ImageGrid data={Home} />

      <h1 style={{ marginTop: "20px" }}>Baby</h1>
      <ImageGrid data={Baby} />

      <h1 style={{ marginTop: "20px" }}>Weight Management</h1>
      <ImageGrid data={Weight_Management} />

      <h1 style={{ marginTop: "20px" }}>Automotive</h1>
      <ImageGrid data={Automotive} />

      <h1 style={{ marginTop: "20px" }}>Electronics</h1>
      <ImageGrid data={Electronics} />
    </div>
  );
}
